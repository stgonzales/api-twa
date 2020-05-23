const User = require('../models/User');

module.exports = {
    async index(req, res){
        
        const users = await User.findAll()
        return res.status(200).json(users);
    },
    
    async store(req, res){
        const {name, email, admin, active} = req.body;

        const rows = await User.findOne({ where: { email: email } })

        if(rows) return res.json({message:`Email '${email}' already exist, contact the admin for update password!`})
        
        await User.create({name, email, admin, active})
            .then(user => {
                return res.status(201).json(user);
            })
            .catch(err => {
                return res.status(400).json({message:`Error. ${err}`})
            })
    },

    async update(req, res){
        const {id, name, email, admin, active} = req.body

        await User.update({
            name,
            email,
            admin,
            active
        },
        {
            where: {id}
        })
            .then( rows => {

                if(rows < 1) return res.json({message:`User id not found. ${rows} updated.`})
                
                return res.status(201).json({message:`Updated successfully, Rows updated ${rows}`})
            })
            .catch(err => {return res.status(500).json({message: `Internal server error (SQL Server API): ${err}`})})
    },

    async exclude(req, res){
                
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(function(rows){

            if(rows < 1) return res.status(400).json({message:`User id not found. ${rows} deleted.`})
            
            return res.status(200).json({message:"Deleted successfully"})

        })
        .catch(function(err) {
            return res.status(500).json({message: `Internal server error (SQL Server API): ${err}`})
        })
    }
}
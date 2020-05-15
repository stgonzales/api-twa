const User = require('../models/User')

module.exports = {
    async index(req, res){
        
        setTimeout( async function(){ 
            const users = await User.findAll()
            return res.json(users);
        }, 1000);
        
        //const users = await User.findAll()

        
    },
    
    async store(req, res){
        const {name, email} = req.body;

        const user = await User.create({name, email})

        return res.json(user);
    },

    async update(req, res){
        const {id, name, email} = req.body

        await User.update({
            name,
            email
        },
        {
            where: {id}
        })
            .then( count => {
                console.log(`Rows updated ${count}`)
                return res.status(200).json({message:`Updated successfully, Rows updated ${count}`})
            })
            .catch(err => {return res.status(500).json({message: `Internal server error (SQL Server API): ${err}`})})
    },

    async exclude(req, res){
                
        await User.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(function(rowDeleted){
            if(rowDeleted === 1){
                return res.status(200).json({message:"Deleted successfully"})
            }else{
                return res.status(404).json({message:"record not found"})
            }
        })
        .catch(function(err) {
            return res.status(500).json(error)
        })
    }
}
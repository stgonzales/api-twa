const Customers = require('../models/Customers');

module.exports = {
    async index(req, res){
        
        const customers = await Customers.findAll()
        if(!customers) return res.status(200).json({message:`No Customer Record!`});
        return res.status(200).json(customers)
    },
    
    async store(req, res){
        const {name, document_number, default_phone, default_email, priority_group_id} = req.body;

        const rows = await Customers.findOne({ where: { document_number: document_number } })

        if(rows) return res.json({message:`Customer already exist!`})
        
        await Customers.create({name, document_number, default_phone, default_email, priority_group_id})
            .then(customer => {
                return res.status(201).json(customer);
            })
            .catch(err => {
                return res.status(400).json({message:`Error. ${err}`})
            })
    },

    // async update(req, res){
    //     const {id, name, email, admin, active} = req.body

    //     await User.update({
    //         name,
    //         email,
    //         admin,
    //         active
    //     },
    //     {
    //         where: {id}
    //     })
    //         .then( rows => {

    //             if(rows < 1) return res.json({message:`User id not found. ${rows} updated.`})
                
    //             return res.status(201).json({message:`Updated successfully, Rows updated ${rows}`})
    //         })
    //         .catch(err => {return res.status(500).json({message: `Internal server error (SQL Server API): ${err}`})})
    // },

    // async exclude(req, res){
                
    //     await User.destroy({
    //         where:{
    //             id: req.params.id
    //         }
    //     })
    //     .then(function(rows){

    //         if(rows < 1) return res.status(400).json({message:`User id not found. ${rows} deleted.`})
            
    //         return res.status(200).json({message:"Deleted successfully"})

    //     })
    //     .catch(function(err) {
    //         return res.status(500).json({message: `Internal server error (SQL Server API): ${err}`})
    //     })
    // }
}
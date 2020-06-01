const { Model, DataTypes } = require('sequelize')

class Customer extends Model{
    static init( sequelize) {
        super.init({
            name: DataTypes.STRING,
            document_number: DataTypes.STRING,
            default_phone: DataTypes.STRING,
            default_email: DataTypes.STRING,
            priority_group_id: DataTypes.INTEGER,

        },{
            sequelize
        })
    }
}

module.exports = Customer;
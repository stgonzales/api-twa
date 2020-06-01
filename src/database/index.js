const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Customer = require('../models/Customer')

const connection = new Sequelize(dbConfig);



let checkConn = setInterval(() => {
    connection
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      clearInterval(checkConn)
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err, 'New attempt in 3 secs.');
      
    });
}, 3000);

User.init(connection)
Customer.init(connection)

module.exports = connection;
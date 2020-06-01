const express = require('express')
const UserController = require('./controllers/UserController')
const CustomerController = require('./controllers/CustomerController')

const routes = express.Router()

//USER-ROUTES
routes.get('/users', UserController.index)

routes.post('/new-user', UserController.store)

routes.put('/updt-user', UserController.update)


//CUSTOMER-ROUTES
routes.get('/customers', CustomerController.index)

routes.post('/new-customer', CustomerController.store)

routes.put('/updt-customer', CustomerController.update)


//TO-DO

module.exports = routes;
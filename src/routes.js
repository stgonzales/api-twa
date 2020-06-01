const express = require('express')
const UserController = require('./controllers/UserController')
const CustomersController = require('./controllers/CustomerController')

const routes = express.Router()

//USER-ROUTES
routes.get('/users', UserController.index)

routes.post('/new-user', UserController.store)

routes.put('/updt-user', UserController.update)


//CUSTOMER-ROUTES
routes.get('/customers', CustomersController.index)

routes.post('/new-customer', CustomersController.store)

//routes.put('/updt-customer', CustomersController.update)


//TO-DO

module.exports = routes;
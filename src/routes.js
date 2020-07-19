const express = require('express')
const UserController = require('./controllers/UserController')
const CustomerController = require('./controllers/CustomerController')

const routes = express.Router()

//USER-ROUTES
routes.get('/twa/users', UserController.index)

routes.post('/twa/new-user', UserController.store)

routes.put('/twa/updt-user', UserController.update)


//CUSTOMER-ROUTES
routes.get('/twa/customers', CustomerController.index)

routes.post('/twa/new-customer', CustomerController.store)

routes.put('/twa/updt-customer', CustomerController.update)


//TO-DO

module.exports = routes;
const express = require('express')
const UserController = require('./controllers/UserController')

const routes = express.Router()

//USER-ROUTES
routes.get('/users', UserController.index)

routes.post('/new-user', UserController.store)

routes.put('/updt-user', UserController.update)

routes.delete('/delete-user/:id', UserController.exclude)

//TICKET-ROUTES
//TO-DO

module.exports = routes;
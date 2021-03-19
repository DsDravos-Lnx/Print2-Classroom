const express = require('express')
const UserController = require('./controllers/UserController')
const ClassroomController = require('./controllers/ClassroomController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

routes.get('/classrooms', ClassroomController.index)
routes.post('/classrooms', ClassroomController.create)



module.exports = routes
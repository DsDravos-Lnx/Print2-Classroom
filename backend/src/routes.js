const express = require('express')

const authMiddleware = require('./middlewares/auth')

const UserController = require('./controllers/UserController')
const ClassroomController = require('./controllers/ClassroomController')
const Authenticate = require('./controllers/Authentication')
const TestController = require('./controllers/TestController')

const routes = express.Router()    
        


routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.post('/users/findOne', UserController.findOne)

routes.get('/classrooms', ClassroomController.index)
routes.post('/classrooms', ClassroomController.create)

routes.post('/authenticate', Authenticate.auth)

.use(authMiddleware.autentication)

routes.get('/test', TestController.index)

module.exports = routes
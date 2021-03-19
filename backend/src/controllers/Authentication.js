const connection = require('../database/connection')
const authConfig = require('../config/auth.json')
const jwt = require('jsonwebtoken')

module.exports = {
    async auth(request, response) {
        const { email, password } = request.body

        const user = await connection('users').select('*').where('email', email)
        
        var userString = JSON.parse(JSON.stringify(user))

        if(!userString[0]){
            return response.status(400).send({ error: 'User not found' })
        }
        if(password!=userString[0].password){
            return response.status(401).send({ error: 'Invalid password' })
        }

        const token = jwt.sign({ id: userString[0].id }, authConfig.secret, {
            expiresIn: 86400,
        })

        response.send({userString, token})
    }
}
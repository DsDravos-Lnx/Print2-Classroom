
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = {
    async autentication(request, response, next){
        const authHeader = request.headers.authorization

        if(!authHeader){
            return response.status(401).send({ error: "No token provided"})
        }
        
        const parts = authHeader.split(' ')

        if(!parts.lenght === 2){
            return response.status(401).send({ error: "Token error"})
        }

        const [ token ] = parts 

        jwt.verify(token, authConfig.secret, (err, decoded) =>{
            if(err){
                return response.status(401).send({ error: "Invalid Token"})
            }
            
            request.userId = decoded.id 
            return next()
        })
    }
}

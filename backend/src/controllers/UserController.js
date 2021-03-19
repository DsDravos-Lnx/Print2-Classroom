const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response){
        const users = await connection('users').select('*')

        return response.json(users)
    },

    async create(request, response){
        const { name, email, password } = request.body

        const avatar = 'image-fake'
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('users').insert({
             id,
             name,
             email,
             password,
             avatar,
             
        })

        return response.json({ id })
    },
    
    async findOne(request, response){
        const { email } = request.body
        
        const user = await connection('users').select('*').where('email', email)

        return response.json(user)
    }

}
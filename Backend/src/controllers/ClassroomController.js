const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response){
        const classrooms = await connection('classrooms').select('*')

        return response.json(classrooms)
    },

    async create(request, response){
        const { title, description, classroomscol } = request.body

        const avatar = 'image-fake'
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('classrooms').insert({
             id,
             title,
             description,
             classroomscol,
             avatar,
             
        })
        return response.json({ id })
    }
}
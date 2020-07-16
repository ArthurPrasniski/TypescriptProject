import {Request, Response} from 'express'
import EmailService from '../services/EmailService'

const users = [
    {name: 'arthur', email:'arthur@mail.com'}
]

export default{
    async index(req: Request, res: Response){
        return res.json(users)
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService()

        emailService.sendMail({
            to: {name: 'Arthur', email:'arthur@mail.com'},
            message: {subject:'subject', body:'description of body'}
        })
        return res.send('sucess')
    }
}
import { insertUser } from '../repositories/userRepository.js'

export async function signUp(req, res){

    const { name, email, password }  = req.locals

    try{
        await insertUser(name, email, password, new Date())
        res.sendStatus(201)
    }catch (error){
        res.sendStatus(error);
    }
}


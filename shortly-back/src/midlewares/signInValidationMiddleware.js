import connection from '../database.js'
import { signinSchema } from '../utilities/schemas.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const secretKey = process.env.JWT_SECRET

export default async function signInValidationMiddleware(req, res, next) {
    const newLogin = req.body;
    const validation = signinSchema.validate(newLogin);
    const { error } = validation

    if(error){
    const errorMsgs = error.details.map(err => err.message)
    res.status(422).send(errorMsgs)
    return;
    }

    try{
        // checando se usuario existe

        const userResgistered = await connection.query(`
            SELECT * FROM users WHERE email=$1`, [newLogin.email]);       

        if (userResgistered.rows[0]) {

            //checando se a senha esta correta

            const passwordVerification = bcrypt.compareSync(newLogin.password, userResgistered.rows[0].password)
            if(passwordVerification){

            const token = jwt.sign({userId: userResgistered.rows[0].id}, secretKey)

            req.locals = {
                email: newLogin.email,
                password: newLogin.password,
                token
            }
            }else{
                res.sendStatus(401)
            }
        }else{
            res.sendStatus(401);
            return;
        }
       
        next();
    } catch (error) {
        res.sendStatus(error);
    }
}
import connection from '../database.js'
import { signupSchema } from '../utilities/schemas.js';

export default async function SignUpValidationMiddleware(req, res, next) {
    const newUser = req.body;
    const newrUserValidation = signupSchema.validate(newUser);
    const { error } = newrUserValidation

    if(error){
    const errorMsgs = error.details.map(err => err.message)
    res.status(422).send(errorMsgs)
    return;
    }

    try{
        // checando se usuario existe

        const userResgistered = await connection.query(`
            SELECT email FROM users WHERE email=$1`, [newUser.email]);
        
        if (userResgistered.rows[0]) {
            res.sendStatus(409);
            return;
        }
        req.locals = {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        }
        next();
    } catch (error) {
        res.sendStatus(error);
    }
}
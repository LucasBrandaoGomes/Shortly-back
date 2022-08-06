import { signupSchema } from '../utilities/schemas.js';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../repositories/userRepository.js';

export default async function signUpValidationMiddleware(req, res, next) {
    const newUser = req.body;
    const validation = signupSchema.validate(newUser);
    const { error } = validation

    if(error){
    const errorMsgs = error.details.map(err => err.message)
    res.status(422).send(errorMsgs)
    return;
    }

    try{
        // checando se usuario existe

        const userResgistered = await getUserByEmail(newUser.email);
        
        if (userResgistered.rows[0]) {
            res.sendStatus(409);
            return;
        }

        const passwordEncrypted = bcrypt.hashSync(newUser.password, 10)

        req.locals = {
            name: newUser.name,
            email: newUser.email,
            password: passwordEncrypted
        }
        next();
    } catch (error) {
        res.sendStatus(error);
    }
}
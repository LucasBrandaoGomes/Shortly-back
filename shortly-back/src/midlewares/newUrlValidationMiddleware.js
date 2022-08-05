import { newUrlSchema } from '../utilities/schemas.js';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.JWT_SECRET

export default async function NewUrlMiddleware(req, res, next) {
    const newUrl = req.body;
    const validation = newUrlSchema.validate(newUrl);
    const { error } = validation

    if(error){
    const errorMsgs = error.details.map(err => err.message)
    res.status(422).send(errorMsgs)
    return;
    }

    try{
        res.locals.url = newUrl.url
        
    next();

    }catch (error){
        res.sendStatus(error)
    }
}
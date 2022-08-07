import { newUrlSchema } from '../utilities/schemas.js';
import { getUserById } from '../repositories/userRepository.js'
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET

export default async function newUrlMiddleware(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace('Bearer ', '')
    const newUrl = req.body;
    const validation = newUrlSchema.validate(newUrl);
    const { error } = validation
    
    try{
        if (!token){
            res.sendStatus(401)
            return;    
        }else{
            if(error){
                const errorMsgs = error.details.map(err => err.message)
                res.status(422).send(errorMsgs)
                return;
            }

            const { userId } = jwt.verify(token, process.env.JWT_SECRET);
            const loggedUser = await getUserById(userId);

            if (!loggedUser.rows[0]) {
                return res.status(401).send('Unauthorized');
            }

            res.locals.id = loggedUser.rows[0].id
            res.locals.url = newUrl.url
            
            next();
        }
    }catch (error){
        res.sendStatus(404)
    }
}
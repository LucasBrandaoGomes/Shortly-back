import { getUserById } from '../repositories/userRepository.js'
import jwt from 'jsonwebtoken';

export default async function tokenValidateMiddleware(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace('Bearer ', '')
    try{
    if (!token){
        res.sendStatus(401)
        return;
        
    }else{
        const { userId } = jwt.verify(token, process.env.JWT_SECRET);
        const loggedUser = await getUserById(userId);
        if (!loggedUser.rows[0]) {
            return res.status(401).send('Unauthorized');
        }
        res.locals.id = loggedUser.rows[0].id
        
        next();
    }
    }catch (error){
        res.sendStatus(404)
    }
}

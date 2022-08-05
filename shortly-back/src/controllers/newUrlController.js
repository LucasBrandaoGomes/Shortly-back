import connection from "../database.js";
import { nanoid } from 'nanoid'

export async function NewUrl(req, res){
    const  url  = res.locals.url
    const  id  = res.locals.id
    const shortUrl =  nanoid();
    const shortNewUrl = {
       shortUrl
    }
    
    try{
        await connection.query(`INSERT INTO urls (user_id, url, short_url, created_at) VALUES ($1, $2, $3, $4)`, [id, url, shortUrl, new Date()]);
        res.status(201).send(shortNewUrl);

    }catch (error){
        res.sendStatus(error)
    }
}


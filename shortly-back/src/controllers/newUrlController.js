import { nanoid } from 'nanoid'
import { inserNewUrl } from "../repositories/urlRepository.js";

export async function newUrl(req, res){
    const  url  = res.locals.url
    const  id  = res.locals.id
    const shortUrl =  nanoid();
    const shortNewUrl = {
       shortUrl
    }
    
    try{
        await inserNewUrl(id, url, shortUrl, new Date());
        res.status(201).send(shortNewUrl);

    }catch (error){
        res.sendStatus(error)
    }
}


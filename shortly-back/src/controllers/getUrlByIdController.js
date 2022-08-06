import { getUrlByUrlId } from "../repositories/urlRepository.js";

export async function getUrlById(req, res){
    const { id } = req.params

    try{
        const { rows } = await getUrlByUrlId(id);
        if (!rows[0]){
            res.sendStatus(404);
            return;        
        }else{
            const url = {
            id: rows[0].id,
            shortUrl: rows[0].short_url,
            url: rows[0].url
            }
        res.status(200).send(url)
        }
    }catch (error){
        res.sendStatus(error);
    }
}
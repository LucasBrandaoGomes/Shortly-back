import { getUrlByShortUrl, updateUrlViews } from "../repositories/urlRepository.js";

export async function openShortUrl(req, res){
    const { shortUrl } = req.params

    try{
        const { rows } = await getUrlByShortUrl(shortUrl);
        if (rows[0]){
            const url = rows[0].url
            let newValue=rows[0].views +1;
            await updateUrlViews(newValue, shortUrl);
            res.redirect(`${url}`)
        }else{
            res.sendStatus(404)
        }
    }catch (error){
        res.sendStatus(error);
    }
}
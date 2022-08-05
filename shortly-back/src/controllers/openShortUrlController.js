import connection from "../database.js";

export async function OpenShortUrl(req, res){
    const { shortUrl } = req.params

    try{
        const { rows } = await connection.query(`SELECT url, short_url FROM urls WHERE short_url ILIKE $1`, [shortUrl]);
        if (rows[0]){
            const url = rows[0].url
            res.redirect(`${url}`)
        }else{
            res.sendStatus(404)
        }
    }catch (error){
        res.sendStatus(error);
    }
}
import connection from "../database.js";

export async function OpenShortUrl(req, res){
    const { shortUrl } = req.params

    try{
        const { rows } = await connection.query(`SELECT url, short_url, views FROM urls WHERE short_url ILIKE $1`, [shortUrl]);
        if (rows[0]){
            const url = rows[0].url
            let newValue=rows[0].views +1;
            await connection.query(`UPDATE urls SET views=$1 WHERE short_url ILIKE $2;`, [newValue, shortUrl])
            res.redirect(`${url}`)
        }else{
            res.sendStatus(404)
        }
    }catch (error){
        res.sendStatus(error);
    }
}
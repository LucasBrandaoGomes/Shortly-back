import connection from "../database.js";

export async function getUrlById(req, res){
    const { id } = req.params

    try{
        const { rows } = await connection.query(`SELECT * FROM urls WHERE id=$1`, [id]);
        const url = {
            id: rows[0].id,
            shortUrl: rows[0].short_url,
            url: rows[0].url
        }
        res.status(200).send(url)
    }catch (error){
        res.sendStatus(error);
    }
}
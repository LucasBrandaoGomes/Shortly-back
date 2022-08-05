import connection from "../database.js";

export async function getRanking(req, res){

    try{
        const { rows } = await connection.query(`SELECT u.id AS user_id, COUNT(b.id) AS "linkCount", COALESCE(SUM(b.views),0) AS "countVisit"
        FROM users u
        LEFT JOIN urls b
        ON u.id = b.user_id
        GROUP BY u.id`)
        
        res.status(200).send(rows)
    }catch (error){
        res.sendStatus(error);
    }
}

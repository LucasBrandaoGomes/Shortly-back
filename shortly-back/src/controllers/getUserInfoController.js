import connection from "../database.js";

export async function getUserInfo(req, res){
    const userId = res.locals.id

    try{
        const { rows: user } = await connection.query(`SELECT u.id AS id, u.name AS name, SUM(b.views) AS "visitCount"
        FROM users u
        JOIN urls b
        ON u.id = b.user_id
        WHERE u.id = $1
        GROUP BY u.id`, [userId]);

        const {rows : shortenedUrls } = await connection.query(` SELECT JSON_BUILD_OBJECT('id', b.id, 'shotUrl', b.short_url, 'url',b.url, 'visitCount', SUM(b.views)) AS "shortenedUrls"
        FROM users u
        JOIN urls b
        ON u.id = b.user_id
        WHERE u.id = $1
        GROUP BY b.id;`, [userId]);

        const sendUserInfo = {
            id: user[0].id,
            name: user[0].name,
            visitCount: user[0].visitCount,
            shortenedUrls: shortenedUrls.map(iten => iten.shortenedUrls)
        }

        res.status(200).send(sendUserInfo)
    }catch (error){
        res.sendStatus(error);
    }
}
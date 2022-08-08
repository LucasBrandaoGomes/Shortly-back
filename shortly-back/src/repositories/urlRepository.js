import connection from '../database.js'

export async function getUrlByShortUrl(shortUrl){
    return connection.query(`SELECT url, short_url, views FROM urls WHERE short_url ILIKE $1`, [shortUrl]);
}

export async function getUrlByUrlId(id){
    return connection.query(`SELECT * FROM urls WHERE id=$1`, [id]);
}

export async function updateUrlViews(views, shortUrl){
    return connection.query(`UPDATE urls SET views=$1 WHERE short_url ILIKE $2;`, [views, shortUrl]);
}

export async function inserNewUrl(id, url, shortUrl, date){
    return connection.query(`INSERT INTO urls (user_id, url, short_url, created_at) VALUES ($1, $2, $3, $4)`, [id, url, shortUrl, date]);
}

export async function deleteUrl(id){
    return connection.query(`DELETE FROM urls WHERE id=$1`, [id]); 
}

export async function getUrlRanking(){
    return connection.query(`SELECT u.id AS user_id, u.name AS name, COUNT(b.id) AS "linksCount", COALESCE(SUM(b.views),0) AS "visitCount"
        FROM users u
        LEFT JOIN urls b
        ON u.id = b.user_id
        GROUP BY u.id
        ORDER BY "visitCount" DESC
        LIMIT 10`);
}

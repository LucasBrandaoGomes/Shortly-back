import connection from "../database.js";

export async function getUserById(id) {
	return connection.query('SELECT * FROM users WHERE id=$1', [id]);
}

export async function getUserByEmail(email) {
	return connection.query(`
    SELECT * FROM users WHERE email=$1`, [email]);
}

export async function insertUser(name, email, password, date){
    connection.query(`INSERT INTO users (name,email,password,created_at) VALUES ($1, $2, $3, $4)`, [name, email, password, date]);
}

export async function getUserTotalUrlVisitis(id){
    return connection.query(`SELECT u.id AS id, u.name AS name, SUM(b.views) AS "visitCount"
        FROM users u
        JOIN urls b
        ON u.id = b.user_id
        WHERE u.id = $1
        GROUP BY u.id`, [id]);
}

export async function getUserShortenedUrlVisitis(id){
    return connection.query(` SELECT JSON_BUILD_OBJECT('id', b.id, 'shotUrl', b.short_url, 'url',b.url, 'visitCount', SUM(b.views)) AS "shortenedUrls"
    FROM users u
    JOIN urls b
    ON u.id = b.user_id
    WHERE u.id = $1
    GROUP BY b.id;`, [id]);
}
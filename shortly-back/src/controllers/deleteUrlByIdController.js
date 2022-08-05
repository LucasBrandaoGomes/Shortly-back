import connection from "../database.js";

export async function DeleteUrlById(req, res){
    const { id } = req.params
    const userId = res.locals.id

    try{
        const { rows } = await connection.query(`SELECT id, user_id FROM urls WHERE id=$1`, [id]);
        if (rows[0]){
            if(rows[0].user_id === userId){
              
                await connection.query(`DELETE FROM urls WHERE id=$1`, [id])
                res.sendStatus(204)
            }else{
                res.sendStatus(401)
            }
        }else{
            res.sendStatus(404)
        }
    }catch (error){
        res.sendStatus(error);
    }
}
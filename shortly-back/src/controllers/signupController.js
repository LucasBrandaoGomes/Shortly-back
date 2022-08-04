import connection from "../database.js";

export async function SignUp(req, res){

    const { name, email, password }  = req.locals

    try{
        await connection.query(`INSERT INTO users (name,email,password,created_at) VALUES ($1, $2, $3, $4)`, [name, email, password, new Date()]);
        res.sendStatus(201)
    }catch (error){
        res.sendStatus(error);
    }
}


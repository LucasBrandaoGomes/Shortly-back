import connection from "../database.js";
import Joi from "joi";

export async function SignUp(req, res){

    const customer = req.body;
    
    const customerSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        passwordConfirmation: Joi.any().valid(Joi.ref('password'))
});

    const schemaValidation = customerSchema.validate(req.body)
    const { error } = schemaValidation
    if (error){
        const errorMsgs = error.details.map(err => err.message)
        res.status(422).send(errorMsgs)
        return;
    }
    try{
        // checando se o cpf existe
        const checkCPF = await connection.query(`
            SELECT name, cpf FROM customers WHERE id=$1`, [customer.cpf]);
        if(!checkCPF.rows[0]){
            await connection.query(`INSERT INTO customers (name,phone,cpf,birthday) VALUES ($1, $2, $3, $4)`, [customer.name, customer.phone, customer.cpf, customer.birthday])
            res.sendStatus(201);
        }else{
            res.sendStatus(409);
        }
    }catch (error){
        res.sendStatus(error);
    }
}


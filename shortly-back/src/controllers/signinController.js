export async function signIn(req, res){

    const { token }  = req.locals

    try{
        res.status(200).send(token)
    }catch (error){
        res.sendStatus(error);
    }
}

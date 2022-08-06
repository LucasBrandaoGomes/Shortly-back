import { getUrlByUrlId, deleteUrl } from "../repositories/urlRepository.js";


export async function deleteUrlById(req, res){
    const { id } = req.params
    const userId = res.locals.id

    try{
        const { rows } = await getUrlByUrlId(id)
        if (rows[0]){
            if(rows[0].user_id === userId){
              
                await deleteUrl(id)
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
import { getUrlRanking } from "../repositories/urlRepository.js";

export async function getRanking(req, res){

    try{
        const { rows } = await getUrlRanking()
        
        res.status(200).send(rows)
    }catch (error){
        res.sendStatus(error);
    }
}

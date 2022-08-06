import { getUserShortenedUrlVisitis, getUserTotalUrlVisitis } from "../repositories/userRepository.js";

export async function getUserInfo(req, res){
    const userId = res.locals.id

    try{
        const { rows: user } = await getUserTotalUrlVisitis(userId);

        const {rows : shortenedUrls } = await getUserShortenedUrlVisitis(userId)

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
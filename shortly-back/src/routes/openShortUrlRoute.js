import { Router } from "express"
import { openShortUrl } from "../controllers/openShortUrlController.js";

const router = Router()

router.get('/urls/open/:shortUrl', openShortUrl)

export default router;
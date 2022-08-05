import { Router } from "express"
import { OpenShortUrl } from "../controllers/openShortUrlController.js";

const router = Router()

router.get('/urls/open/:shortUrl', OpenShortUrl)

export default router;
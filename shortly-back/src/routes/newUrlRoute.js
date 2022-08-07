import { Router } from "express"
import { newUrl } from "../controllers/newUrlController.js";
import { globalMiddleware } from "../midlewares/globalMiddleware.js";

const router = Router()

router.post('/urls/shorten',globalMiddleware, newUrl)

export default router;
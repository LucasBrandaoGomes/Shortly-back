import { Router } from "express"
import { getUserInfo } from "../controllers/getUserInfoController.js";
import { globalMiddleware } from "../midlewares/globalMiddleware.js";

const router = Router()

router.get('/users/me', globalMiddleware, getUserInfo)

export default router;
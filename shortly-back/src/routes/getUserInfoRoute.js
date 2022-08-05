import { Router } from "express"
import { getUserInfo } from "../controllers/getUserInfoController.js";
import tokenValidateMiddleware from "../midlewares/tokenValidationMidleware.js";

const router = Router()

router.get('/users/me', tokenValidateMiddleware, getUserInfo)

export default router;
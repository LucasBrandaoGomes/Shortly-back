import { Router } from "express"
import { GetUserInfo } from "../controllers/getUserInfoController.js";
import TokenValidateMiddleware from "../midlewares/tokenValidationMidleware.js";

const router = Router()

router.get('/users/me', TokenValidateMiddleware, GetUserInfo)

export default router;
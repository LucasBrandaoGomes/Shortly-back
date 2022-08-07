import { Router } from "express"
import { globalMiddleware } from "../midlewares/globalMiddleware.js";
import { signIn } from "../controllers/signinController.js";

const router = Router()

router.post('/signin', globalMiddleware, signIn)

export default router;
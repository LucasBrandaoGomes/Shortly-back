import { Router } from "express"
import signInValidationMiddleware from "../midlewares/signInValidationMiddleware.js";
import { signIn } from "../controllers/signinController.js";

const router = Router()

router.post('/signin', signInValidationMiddleware, signIn)

export default router;
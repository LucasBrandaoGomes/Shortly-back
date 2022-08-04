import { Router } from "express"
import SignInValidationMiddleware from "../midlewares/signInValidationMiddleware.js";
import { SignIn } from "../controllers/signinController.js";

const router = Router()

router.post('/signin', SignInValidationMiddleware, SignIn)

export default router;
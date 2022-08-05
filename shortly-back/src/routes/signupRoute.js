import { Router } from "express"
import signUpValidationMiddleware from "../midlewares/signUpValidationMiddleware.js";
import { signUp } from "../controllers/signupController.js";

const router = Router()

router.post('/signup', signUpValidationMiddleware, signUp)

export default router;
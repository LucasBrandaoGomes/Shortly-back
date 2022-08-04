import { Router } from "express"
import SignUpValidationMiddleware from "../midlewares/signUpValidationMidleware.js";
import { SignUp } from "../controllers/signupControllers.js";

const router = Router()

router.post('/signup', SignUpValidationMiddleware, SignUp)

export default router;
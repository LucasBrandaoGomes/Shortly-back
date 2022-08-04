import { Router } from "express"
import SignUpValidationMiddleware from "../midlewares/signUpValidationMiddleware.js";
import { SignUp } from "../controllers/signupController.js";

const router = Router()

router.post('/signup', SignUpValidationMiddleware, SignUp)

export default router;
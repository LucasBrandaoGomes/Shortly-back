import { Router } from "express"
import { signUp } from "../controllers/signupController.js";
import { globalMiddleware } from "../midlewares/globalMiddleware.js";

const router = Router()

router.post('/signup', globalMiddleware, signUp)

export default router;
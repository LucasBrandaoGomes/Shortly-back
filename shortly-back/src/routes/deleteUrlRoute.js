import { Router } from "express"
import { DeleteUrlById } from "../controllers/deleteUrlByIdController.js";
import TokenValidateMiddleware from "../midlewares/tokenValidationMidleware.js";

const router = Router()

router.delete('/urls/:id', TokenValidateMiddleware , DeleteUrlById)

export default router;
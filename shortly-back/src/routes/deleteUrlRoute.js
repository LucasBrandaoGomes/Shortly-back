import { Router } from "express"
import { deleteUrlById } from "../controllers/deleteUrlByIdController.js";
import tokenValidateMiddleware from "../midlewares/tokenValidationMidleware.js";

const router = Router()

router.delete('/urls/:id', tokenValidateMiddleware , deleteUrlById)

export default router;
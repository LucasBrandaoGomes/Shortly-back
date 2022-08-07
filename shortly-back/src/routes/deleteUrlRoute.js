import { Router } from "express"
import { deleteUrlById } from "../controllers/deleteUrlByIdController.js";
import { globalMiddleware } from "../midlewares/globalMiddleware.js";

const router = Router()

router.delete('/urls/:id', globalMiddleware , deleteUrlById)

export default router;
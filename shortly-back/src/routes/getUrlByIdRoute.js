import { Router } from "express"
import { getUrlById } from "../controllers/getUrlByIdController.js";

const router = Router()

router.get('/urls/:id', getUrlById)

export default router;
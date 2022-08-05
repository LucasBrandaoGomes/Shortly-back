import { Router } from "express"
import { GetUrlById } from "../controllers/getUrlByIdController.js";

const router = Router()

router.get('/urls/:id', GetUrlById)

export default router;
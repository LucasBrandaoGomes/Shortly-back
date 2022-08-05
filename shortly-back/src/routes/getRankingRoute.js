import { Router } from "express"
import { getRanking } from "../controllers/getRankingController.js";

const router = Router()

router.get('/ranking', getRanking)

export default router;
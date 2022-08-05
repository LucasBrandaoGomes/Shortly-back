import { Router } from "express"
import newUrlMiddleware from '../midlewares/newUrlValidationMiddleware.js';
import tokenValidateMiddleware from '../midlewares/tokenValidationMidleware.js';

import { newUrl } from "../controllers/newUrlController.js";

const router = Router()

router.post('/urls/shorten',tokenValidateMiddleware, newUrlMiddleware, newUrl)

export default router;
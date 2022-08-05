import { Router } from "express"
import NewUrlMiddleware from '../midlewares/newUrlValidationMiddleware.js';
import TokenValidateMiddleware from '../midlewares/tokenValidationMidleware.js';

import { NewUrl } from "../controllers/newUrlController.js";

const router = Router()

router.post('/urls/shorten',TokenValidateMiddleware, NewUrlMiddleware, NewUrl)

export default router;
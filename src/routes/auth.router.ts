import { Router, Request, Response } from "express"
import authController from "../controllers/auth.controller";
const router = Router();

router.post('/login', authController.login)

// router.get('/', authController.login)


export default router
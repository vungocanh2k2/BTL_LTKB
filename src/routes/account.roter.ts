import { Router } from "express";
import accountController from "../controllers/account.controller";

const router =  Router();

router.get('/', accountController.listAcc)



export default router
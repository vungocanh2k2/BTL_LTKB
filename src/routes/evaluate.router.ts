import { Router } from "express";
import evaluateController from "../controllers/evaluate.controller";

const router =  Router();

router.get('/', evaluateController.listEvaluate)



export default router
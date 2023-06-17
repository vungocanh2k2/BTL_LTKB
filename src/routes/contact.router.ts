import { Router } from "express";
import contactController from "../controllers/contact.controller";

const router =  Router();

router.get('/', contactController.listContact)



export default router
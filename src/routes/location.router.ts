import { Router } from "express";
import locationController from "../controllers/location.controller";

const router =  Router();

router.get('/', locationController.listLCT)

export default router
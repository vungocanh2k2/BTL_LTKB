import { Router } from "express";
import bookController from "../controllers/book.controller";

const router =  Router();

router.get('/', bookController.listBook)



export default router
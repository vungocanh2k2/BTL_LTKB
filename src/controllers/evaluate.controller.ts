import MysqlDataSource from "../database/database"
import { Evaluate } from "../models/evaluate"
import { Request, Response , NextFunction } from "express";

const contactRepository = MysqlDataSource.getRepository(Evaluate)
class evaluateController{
   async listEvaluate(req: any, res: any, next: any) {
  // return
    const listEvaluate = await MysqlDataSource.manager.find(Evaluate)
    res.render('CommentManagement', {data : listEvaluate})
  }
}
export default new evaluateController()
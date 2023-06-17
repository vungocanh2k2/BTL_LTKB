import MysqlDataSource from "../database/database"
import { User } from "../models/admin"
import { Request, Response , NextFunction } from "express";

const accountRepository = MysqlDataSource.getRepository(User)
class accountController{
  async listAcc(req: any, res: any, next: any) {
    // return
    const listAcc = await MysqlDataSource.manager.find(User)
    res.render('AccountManagement', {data : listAcc})
}
}
export default new accountController()
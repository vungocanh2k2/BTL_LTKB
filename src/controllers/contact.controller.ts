import MysqlDataSource from "../database/database"
import { Contact } from "../models/contact"
import { Request, Response , NextFunction } from "express";

const contactRepository = MysqlDataSource.getRepository(Contact)
class contactController{
   async listContact(req: any, res: any, next: any) {
  // return
    const listContact = await MysqlDataSource.manager.find(Contact)
    res.render('CommentManagement', {data : listContact})
  }
}
export default new contactController()
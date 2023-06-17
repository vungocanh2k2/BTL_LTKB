import MysqlDataSource from "../database/database"
import { Book } from "../models/book"
import { Request, Response , NextFunction } from "express";

const bookRepository = MysqlDataSource.getRepository(Book)
class bookController{
  async listBook(req: any, res: any, next: any) {
    // return
      const listBook = await MysqlDataSource.manager.find(Book)
      res.render('OderManagement', {data : listBook})
  }
  
}
export default new bookController()
import MysqlDataSource from "../database/database"
import { User } from "../models/admin"
import { Book } from "../models/book"
import { Contact } from "../models/contact"
import { Location } from "../models/location"
import { Response,Request,NextFunction } from "express"

class siteController {  
  async index(req: Request, res: Response, next:any) {
    let data = res.locals.data;
    const results = await MysqlDataSource.manager.find(Location);
    data = {
      products1: results,
    };
    // res.json(results)
   res.render("index", {
     title: "Trang chủ",
     layout: "main",
     data: data,
    });
  }
}

export default  new siteController()
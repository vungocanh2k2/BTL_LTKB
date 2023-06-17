import MysqlDataSource from "../database/database"
import { User } from "../models/admin"
import { Book } from "../models/book"
import { Evaluate} from "../models/evaluate"
import { Location } from "../models/location"
import { Response,Request,NextFunction } from "express"

class siteController {  
  async index(req: Request, res: Response, next:any) {
    let data = res.locals.data;
    const results = await MysqlDataSource.manager.find(Location);
    const products1 = await MysqlDataSource.manager.find(Evaluate);
    data = {
      products1: results,
      products2:products1,
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
import MysqlDataSource from "../database/database"
import { Location } from "../models/location"
import { Request, Response , NextFunction } from "express";

const locationRepository = MysqlDataSource.getRepository(Location)
class locationController{
  async listLCT(req: any, res: any, next: any) {
    // return
    const listLCT = await MysqlDataSource.manager.find(Location)
    res.render('index', {data : listLCT})
}
  
}
export default new locationController()
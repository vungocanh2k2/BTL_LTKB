import MysqlDataSource from "../database/database"
import { User } from "../models/admin"
import { Book } from "../models/book"
import { Contact } from "../models/contact"
import {Location } from "../models/location"
import { Service } from "../models/service"

class siteController {
  public static index(req: any, res: any, next: any) {
    // return
    if (req.isAuthenticated()) {
      res.redirect('/admin')
    }
    res.redirect('/')
  }
  public static create(req: any, res: any, next: any) {
    return
  }


  async listLCT(req: any, res: any, next: any) {
    // return
    const listLCT = await MysqlDataSource.manager.find(Location)
    res.render('index', {data : listLCT})
}


async listSVC(req: any, res: any, next: any) {
  // return
  const listSVC = await MysqlDataSource.manager.find(Location)
  res.render('index', {data : listSVC})
}

  async listAcc(req: any, res: any, next: any) {
    // return
    const listAcc = await MysqlDataSource.manager.find(User)
    res.render('AccountManagement', {data : listAcc})
}
   
    async listBook(req: any, res: any, next: any) {
  // return
    const listBook = await MysqlDataSource.manager.find(Book)
    res.render('OderManagement', {data : listBook})
}

    async listContact(req: any, res: any, next: any) {
  // return
    const listContact = await MysqlDataSource.manager.find(Contact)
    res.render('CommentManagement', {data : listContact})
  }
    

}
export default  new siteController()
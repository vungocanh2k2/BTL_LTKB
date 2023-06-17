import MysqlDataSource from "../database/database"
import { User } from "../models/admin"
import { Request, Response } from "express";

const userRepository = MysqlDataSource.getRepository(User)
class authController{
  public static async login(req: Request, res: Response, next: any) {
    // return
    // const user = await User.findOne(adminname: req.body.username);

    // if(user) {
    //   res.redirect('/admin')
    // }
    // else {
    //   res.redirect('/')
    // }
    const { username, password } = req.body;

    // Check if user exists in the database
    const user = await MysqlDataSource.getRepository(User)
    .createQueryBuilder("users")
    .where("users.email = :username", {
      username : req.body.username,
    })
    .getOne()

  if (!user || user.password !== password) {
    res.status(401).send('Tài khoản hoặc mật khẩu không đúng');
    return;
  }
  res.redirect('/admin');
  // create a session and redirect to /admin
  // (req.session as any).user = user;
  
  }    
  public static create(req: any, res: any, next: any) {
    return
  }
  
}
export default authController
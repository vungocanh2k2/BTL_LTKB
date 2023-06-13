import { User } from "../models/admin";
import { Book } from "../models/book";
import { Contact } from "../models/contact";
import { Admin, DataSource } from "typeorm";
const MysqlDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "travel",
  entities: [User,Book,Contact],
  synchronize: true,
  logging: true,
});
export default MysqlDataSource;
//import siteRouter from './site'
import * as express from 'express';
import { Express } from 'express';
import { engine } from 'express-handlebars';
import { Router } from 'express'
import * as path from 'path';
import router from './routes/index.router';
import MysqlDataSource from './database/database';

const app: Express = express();

// const app: express.Application = express();
const PORT = 3000
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(express.static(path.resolve('src/public')))
app.use(express.static(path.resolve('src/public')));
// console.log('////////////////////////////',path.resolve())
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(path.resolve("src/resources"), "views"));
app.use(express.json());
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});

router(app)
MysqlDataSource.initialize()
  .then(() => console.log("thành công"))
  .catch(() => console.log("error"));

import { Router } from "express"
import siteRouter from './site.router'
import authRouter from './auth.router'


function router(app: any) {
  app.use('/', siteRouter)
  app.use('/', authRouter)
}

export default router
import { Router } from "express"
import siteRouter from './site.router'
import authRouter from './auth.router'
import accountRouter from './account.roter'
import bookRouter from './book.router'
import evaluateRouter from './evaluate.router'
import locationRouter from './location.router'

function router(app: any) {
  app.use('/account', authRouter)
  app.use('/admin/account', accountRouter)
  app.use('/admin/book', bookRouter)
  app.use('/admin/evaluate', evaluateRouter)
  app.use('/admin/location', locationRouter)
  app.use('/', siteRouter)

}

export default router
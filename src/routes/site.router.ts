import { Router, Request, Response } from "express"
import siteController from "../controllers/siteController";

const router = Router();
router.get('/forgetpassword', (req: Request ,res: Response  ) => {
  res.render('fogot')
})


 router.get('/' ,siteController.index)


router.get('/back', (req: Request ,res: Response  ) => {
  res.render('index')
})

router.get('/admin', (req: Request ,res: Response  ) => {
  res.render('admin')
})
router.get('/AccountManagement', (req: Request ,res: Response  ) => {
  res.redirect('/admin/account')
})
router.get('/OderManagement', (req: Request ,res: Response  ) => {
  res.redirect('/admin/book')
})

router.get('/CommentManagement', (req: Request ,res: Response  ) => {
  res.redirect('/admin/evaluate')
})

router.get('/AddAccount', (req: Request ,res: Response  ) => {
  res.render('AddAccount')
})

router.get('/EditAccount', (req: Request ,res: Response  ) => {
  res.render('EditAccount')
})

router.get('/EditOder', (req: Request ,res: Response  ) => {
  res.render('EditOder')
})


export default router
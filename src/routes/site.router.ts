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
  res.render('AccountManagement')
})
router.get('/OderManagement', (req: Request ,res: Response  ) => {
  res.render('OderManagement')
})

router.get('/CommentManagement', (req: Request ,res: Response  ) => {
  res.render('CommentManagement')
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
import { Router, Request, Response } from "express"

const router = Router();
router.get('/quenmatkhau', (req: Request ,res: Response  ) => {
  res.render('fogot')
})


router.get('/', (req: Request ,res: Response  ) => {
  res.render('index')
})


router.get('/quayve', (req: Request ,res: Response  ) => {
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
export default router
import { Router, Request, Response } from "express"
import siteController from "../controllers/siteController";

const router = Router();
router.get('/quenmatkhau', (req: Request ,res: Response  ) => {
  res.render('fogot')
})


// router.get('/', (req: Request ,res: Response  ) => {
//   res.render('index')
// })


router.get('/quayve', (req: Request ,res: Response  ) => {
  res.render('index')
})


router.get('/admin', (req: Request ,res: Response  ) => {
  res.render('admin')
})


router.get('/AccountManagement', siteController.listAcc)


router.get('/OderManagement', siteController.listBook)


router.get('/CommentManagement',siteController.listContact)

router.get('/',siteController.listLCT)


router.get('/AddAccount', (req: Request ,res: Response  ) => {
  res.render('AddAccount')
})

router.get('/EditAccount', (req: Request ,res: Response  ) => {
  res.render('EditAccount')
})
export default router
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
}
export default siteController
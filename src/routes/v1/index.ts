import { Router, Response, Request } from "express"
import upload from "./upload"
const router = Router()

router.get('/', (req: Request, res: Response) => res.redirect('/'))
router.use(upload)

export default router
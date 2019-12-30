import { upload } from "../../controllers/v1/upload"
import { Router } from "express"

const router = Router()
router.post('/upload', upload)

export default router

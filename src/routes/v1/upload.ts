import { upload } from "../../controllers/v1/upload"
import { Router } from "express"
import { diskStorage } from "multer"

const storage = diskStorage({
  destination: (req, file, cb) => {

  }
})

const router = Router()
router.post('/upload', upload)

export default router

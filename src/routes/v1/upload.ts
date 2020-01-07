import { upload } from "../../controllers/v1/upload"
import { Router } from "express"
import { diskStorage } from "multer"
import createDirectory from "../../utils/createDirectory"
import multer from "multer"

type Request = Express.Request & {
  body: { filename: string }
}

const storage = diskStorage({
  destination: async (req, file, cb) => {
    const dir = process.env.STORAGE_DIR as string
    await createDirectory(dir)
    cb(null, dir)
  },
  filename: (req: Request, file, cb) => {
    const filename = (!req.body.filename) ? file.originalname : req.body.filename
    cb(null, filename)
  }
})

const uploader = multer({
  storage, limits: {
    fileSize: 1024 * 1024 * 1024 * 10 // 10 MiB
  }
})
const router = Router()
router.route('/upload').post(uploader.array('sharex', 100), upload)

export default router

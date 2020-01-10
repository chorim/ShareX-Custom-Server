import { upload } from "../../controllers/v1/upload"
import { Router } from "express"
import { diskStorage } from "multer"
import createDirectory from "../../utils/createDirectory"
import multer from "multer"
import fs from "fs"
import auth from "../../middlewares/auth"

const maxUploadSizeLimit = +(process.env.MAX_UPLOAD_CAPACITY_LIMIT as string) | 10

type Request = Express.Request & {
  body: { filename: string }
}

const storage = diskStorage({
  destination: (req, file, cb) => {
    const dir = process.env.STORAGE_DIR as string
    fs.access(dir, fs.constants.F_OK, async (err) => {
      if (err) await createDirectory(dir)
      cb(null, dir)
    })
  },
  filename: (req: Request, file, cb) => {
    const filename = (!req.body.filename) ? file.originalname : req.body.filename
    cb(null, filename)
  }
})

const uploader = multer({
  storage, limits: {
    fileSize: 1024 * 1024 * 1024 * maxUploadSizeLimit // default size is 10MB
  }
})
const router = Router()
router.route('/upload').post(auth, uploader.single('sharex'), upload)

export default router

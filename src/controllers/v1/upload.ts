import { createHandler } from "../../utils/createResponse"
import { ShareXCustomResponse } from "../../types/response"

export const upload = createHandler((req, res) => {
  const response: ShareXCustomResponse = {
    status: true,
    message: `${req.body.filename ? req.body.filename : req.file.filename} has been uploaded.`,
    url: `${process.env.HOST_URL}/upload/${req.file.filename}`
  }
  res.sendDefaultResponse(response)
})
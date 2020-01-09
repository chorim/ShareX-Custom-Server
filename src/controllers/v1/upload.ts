import { createHandler } from "../../utils/createResponse"

export const upload = createHandler((req, res) => {

  res.sendDefaultResponse({ status: true, message: `${req.body.filename} has been uploaded.` })
})
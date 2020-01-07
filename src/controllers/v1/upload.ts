import { createHandler } from "../../utils/createResponse"

export const upload = createHandler((req, res) => {

  res.sendDefaultResponse({ status: true, message: "Hello" })
})
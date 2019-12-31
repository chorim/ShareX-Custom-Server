import { Request, Response } from "express"
import { createHandler } from "../../utils/createResponse"

export const upload = createHandler((request, response) => {
  response.sendDefaultResponse({ status: true, message: "Hello" })
})
import { createHandler } from "../../utils/createResponse"

export const upload = createHandler((request, response) => {
  response.sendDefaultResponse({ status: true, message: "Hello" })
})
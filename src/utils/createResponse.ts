import express from 'express'
import { DefaultResponse } from "../types/response"

type CustomRequest = express.Request
type CustomResponse = express.Response & {
  sendDefaultResponse: (response: DefaultResponse) => void
}

type Handler = (request: CustomRequest, response: CustomResponse) => void | Promise<void>

export const createHandler = (handler: Handler) => (request: express.Request, response: express.Response) => {
  const customRequest = request as CustomRequest
  const customResponse = response as CustomResponse
  customResponse.sendDefaultResponse = (res: DefaultResponse) => {
    response.status(200).json(res)
  }
  handler(customRequest, customResponse)
}
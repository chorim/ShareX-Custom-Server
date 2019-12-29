import { DefaultResponse, ShareXCustomResponse } from "../types/response"
import { Response } from "express"

export const createDefaultResponse = (res: Response, status: number, message: string) => {
  const response: DefaultResponse = { status: (status === 200), message }
  return res.status(status).json(response)
}

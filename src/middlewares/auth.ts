import { Request, Response, NextFunction } from "express"
import { isUser } from "../utils/isUser"

class CustomError extends Error {
  public status: number | undefined
  constructor(message?: string) {
    super(message)
  }
}

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers
  console.log(authorization)
  const user = isUser(authorization as string)
  if (!user) {
    let err = new CustomError("Not authorized user.")
    err.status = 400
    next(err)
  } else next()
}
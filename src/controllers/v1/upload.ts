import { Request, Response } from "express"

export const upload = async (req: Request, res: Response) => {
  return res.status(200).json({test: true})
}
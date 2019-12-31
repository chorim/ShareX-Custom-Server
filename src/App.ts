import "./libs/dotenv"
import express from "express"
import v1 from "./routes/v1"

export const app = express()

app.get('/', (req: express.Request, res: express.Response) =>
  res.status(200).json({status:true, message: "ShareX-Custom-Server is now working."}))
app.use('/v1', v1)

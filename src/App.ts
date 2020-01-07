import "./libs/dotenv"
import "./extensions"
import express from "express"
import v1 from "./routes/v1"
import { createHandler } from "./utils/createResponse"

export const app = express()

app.get('/', createHandler((req, res) =>
  res.sendDefaultResponse({status: true, message: "ShareX-Custom-Server is now working."})
))
app.use('/v1', v1)

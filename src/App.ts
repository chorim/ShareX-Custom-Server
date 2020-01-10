import "./libs/dotenv"
import "./extensions"
import express from "express"
import v1 from "./routes/v1"
import { createHandler } from "./utils/createResponse"
import createError from "http-errors"

export const app = express()

app.get('/', createHandler((req, res) =>
  res.sendDefaultResponse({status: true, message: "ShareX-Custom-Server is now working."})
))
app.use('/v1', v1)

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  let apiError = err

  if (!err.status)
    apiError = createError(err)

  res.locals.message = apiError.message
  res.locals.error = process.env.NODE_ENV === 'development' ? apiError : {}

  const status = (apiError.status === 200)
  // render the error page
  return res.status(apiError.status)
    .json({status, message: apiError.message})
})

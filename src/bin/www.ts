import { app } from "../App"

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`ShareX-Custom-Server has started on port ${port}`))
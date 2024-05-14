import express from "express"
import cors from "cors"
import userRouter from "./routes/users.js"
import mongoose from "mongoose"
import shippingRouter from "./routes/shipments.js"

//
const mongoURI =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"
mongoose.connect(mongoURI)
//
const app = express()
app.use(express.json())
//
app.use(cors())
app.use("/", userRouter, (req, res, next) => {
  console.log("Request URL:", req.originalUrl)
  next()
})
app.use("/shipments", shippingRouter, (req, res, next) => {
  console.log("Request URL:", req.originalUrl)
  next()
})

app.listen(4000, () => {
  console.log("4000")
})

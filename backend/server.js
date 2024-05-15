import express from "express"
import cors from "cors"
import userRouter from "./routes/usersRoute.js"
import mongoose from "mongoose"
import shippingRouter from "./routes/shipmentsRoute.js"
import OrderList from "./model/productSchema.js"

//
const mongoURI =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"
mongoose.connect(mongoURI)
//
const app = express()
app.use(express.json())
//
app.use(cors())
app.use("/users", userRouter)
app.use("/shipments", shippingRouter)

app.listen(4000, () => {
  console.log("4000")
})

import express from "express"
import cors from "cors"
import userRouter from "./routes/usersRoute.js"
import mongoose from "mongoose"
import shippingRouter from "./routes/shipmentsRoute.js"
import productRouter from "./routes/productsRoute.js"
import loginRouter from "./routes/loginRoute.js"
import singleProductRoute from "./routes/singleProductRoute.js"
//
export const mongoURI =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"

mongoose.connect(mongoURI)
const app = express()

app.use(cors())
app.use(express.json())
//
app.use("/users", userRouter)
app.use("/shipments", shippingRouter)
app.use("/products", productRouter)
app.use("/login", loginRouter)
app.use("/product/:id", singleProductRoute)
app.use("/users/:id", loginRouter)
app.listen(4000, () => {
  console.log("4000")
})

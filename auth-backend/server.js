import express from "express"
import connectDB from "./db.js"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./auth.js"

dotenv.config()
export const mongoURI =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"
const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json())
app.use(cors())

// Define Routes
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

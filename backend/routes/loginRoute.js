import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import Login from "../model/loginSchema.js"
import express from "express"

const loginRouter = express.Router()
dotenv.config()

loginRouter.post("/", async (req, res) => {
  console.log("Received request body:", req.body) // Log entire request body

  const { email, password } = req.body.login // Assuming email and password are sent directly in the request body

  try {
    const user = await Login.findOne({ email })
    console.log("Queried user from database:", user) // Log the queried user

    if (!user) {
      return res.status(404).json({ message: "No record found" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      // Avoid leaking information about existing email addresses
      return res.status(401).json({ message: "Invalid email or password" })
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    res.status(200).json({ token })
  } catch (error) {
    console.error("Error during login process:", error) // Log any error
    res.status(500).json({ message: "Internal server error" })
  }
})

export default loginRouter

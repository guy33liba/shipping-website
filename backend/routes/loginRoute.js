import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import Login from "../model/loginSchema.js"
import express from "express"

const loginRouter = express.Router()
dotenv.config()

loginRouter.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    // Find user by email
    const user = await Login.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    // Send token in response
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

loginRouter.post("login", loginUser)
export default loginRouter

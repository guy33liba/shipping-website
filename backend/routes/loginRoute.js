import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import express from "express"
import User from "../model/userSchema.js"

const loginRouter = express.Router()
dotenv.config()

loginRouter.post("/", async (req, res) => {
  console.log("Received request body:", req.body) // Log entire request body
  const { email, password } = req.body.login
  console.log("Extracted email and password:", email, password) // Log extracted email and password

  try {
    console.log({ email })
    const user = console.log(await User.findOne({ email }))
    console.log("Queried user from database:", user) // Log the queried user

    if (!user) {
      return res.status(404).json("No Record Existed")
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json("The password is incorrect")
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    )

    res.status(200).json({ token })
  } catch (error) {
    console.error("Error during login process:", error) // Log any error
    res.status(500).json({ message: error.message })
  }
})

export default loginRouter

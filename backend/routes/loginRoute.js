import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import Login from "../model/loginSchema.js"
import express from "express"

const loginRouter = express.Router()
dotenv.config()

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body.login
  console.log(email, password)
  try {
    const user = await Login.findOne({ email: email })

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
      { expiresIn: "1h" }
    )

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default loginRouter

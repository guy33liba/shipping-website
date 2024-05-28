import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import express from "express"
import User from "../model/userSchema.js"
import bcrypt from "bcryptjs"
const loginRouter = express.Router()
dotenv.config()

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body.login
  try {
    console.log({ email })
    const user = await User.findOne({ "register.email": email })
    console.log(`Queried user from database: ${user}`) // Log the queried user

    if (!user) {
      return res.status(404).json("No Record Existed")
    }
    const hash = await bcrypt.hash(password, 2)

    const isPasswordValid = bcrypt.compare(hash, user.register.password)
    if (!isPasswordValid) {
      return res.status(401).json("The password is incorrect")
    }

    const token = jwt.sign(
      { userId: user._id, email: user.register.email },
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

import Jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import express from "express"
import Login from "../model/loginSchema.js"

const loginRouter = express.Router()
dotenv.config()

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body.login

<<<<<<< HEAD
  const user = await Login.findOne({ email: email })
  if (user) {
    const validation = await bcrypt.compare(password, user.password)

    if (validation) {
      const token = Jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" })
      console.log(token)
      res.json({ user, token })
      console.log("success")
    } else {
      res.status(500).json({ error: err.message })
    }
=======
  try {
    const user = await User.findOne({ email })
    console.log(`Queried user from database: ${user}`) // Log the queried user
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
>>>>>>> b2069b6e63c6eb8561b830f8e0447456138d0fb6
  }
})

export default loginRouter

import Jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import express from "express"
import Login from "../model/loginSchema.js"

const loginRouter = express.Router()
dotenv.config()

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body.login

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
  }
})

export default loginRouter

import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import Login from "../model/loginSchema.js"
import express from "express"

const loginRouter = express.Router()
dotenv.config()

loginRouter.post("/", async (req, res) => {

  const { email, password } = req.body

  try {
    user = new Login({
      email,
      password,
    })
    await user.save()
    res.status(201).json({ token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default loginRouter

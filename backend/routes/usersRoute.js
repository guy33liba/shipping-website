import express from "express"
import User from "../model/userSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

userRouter.post("/", async (req, res) => {
  const { name, email, password, isAdmin } = req.body.register
  const user = new User({
    register: {
      name,
      email,
      password,
      isAdmin,
    },
  })
  console.log(user)
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default userRouter

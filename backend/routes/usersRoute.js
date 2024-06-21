import express from "express"
import User from "../model/userSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

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
  const { name, email, password } = req.body.register
})
userRouter.post("/", async (req, res) => {
  const { email, password } = req.body.register

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." })
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ "register.email": email })
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user instance
    const newUser = new User({
      register: {
        email,
        password: hashedPassword,
      },
    })

    // Save the user to the database
    const savedUser = await newUser.save()
    res.status(201).json({ message: "User registered successfully", user: savedUser })
  } catch (error) {
    console.error("Error during user registration:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
})

export default userRouter

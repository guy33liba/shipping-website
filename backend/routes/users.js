import express from "express"
const userRouter = express.Router()
import User from "../model/UserSchema.js"
userRouter.get("/users", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

userRouter.post("/users", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
    console.log(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

userRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId
  res.json({ message: `Get user with ID ${userId}` })
})

userRouter.put("/:userId", (req, res) => {
  const userId = req.params.userId
  res.json({ message: `Update user with ID ${userId}` })
})

userRouter.delete("/:userId", (req, res) => {
  const userId = req.params.userId
  res.json({ message: `Delete user with ID ${userId}` })
})

export default userRouter

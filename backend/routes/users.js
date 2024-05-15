import express from "express"
import User from "../model/userSchema.js"

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
  const {name,email,password,isAdmin} = req.body
  const user = new User({
    name ,
    email ,
    password ,
    isAdmin ,
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

import express from "express"
import User from "../model/userSchema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userRouter = express.Router()

// Get all users
userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Register a new user
userRouter.post("/", async (req, res) => {
  const { name, email, password, isAdmin } = req.body

  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User({
      register: {
        name,
        email,
        password: hashedPassword,
        isAdmin,
      },
    })

    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// User login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ "register.email": email })
    if (user && (await bcrypt.compare(password, user.register.password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      })
      res.json({ token, user })
    } else {
      res.status(401).json({ message: "Invalid email or password" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get a user by ID
userRouter.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update a user by ID
userRouter.put("/:userId", async (req, res) => {
  const { name, email, isAdmin } = req.body

  try {
    const user = await User.findById(req.params.userId)
    if (user) {
      user.register.name = name || user.register.name
      user.register.email = email || user.register.email
      user.register.isAdmin = isAdmin !== undefined ? isAdmin : user.register.isAdmin
      const updatedUser = await user.save()
      res.json(updatedUser)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Delete a user by ID
userRouter.delete("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    if (user) {
      await user.remove()
      res.json({ message: "User deleted" })
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default userRouter

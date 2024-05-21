import express from 'express'
import User from '../model/userSchema.js'
import { protect } from '../middleware/authMiddleware.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userRouter = express.Router()

userRouter.get('/', protect, async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

userRouter.post('/', async (req, res) => {
  const { name, email, password, isAdmin } = req.body.register
  const user = new User({
    register: {
      name,
      email,
      password,
      isAdmin,
    },
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

userRouter.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ 'register.email': email })
    if (user && (await user.matchPassword(password))) {
      const token = user.getSignedJwtToken()
      res.json({ token, user })
    } else {
      res.status(401).json({ message: 'Invalid email or password' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

userRouter.get('/:userId', protect, (req, res) => {
  const userId = req.params.userId
  res.json({ message: `Get user with ID ${userId}` })
})

userRouter.put('/:userId', protect, (req, res) => {
  const userId = req.params.userId
  res.json({ message: `Update user with ID ${userId}` })
})

userRouter.delete('/:userId', protect, (req, res) => {
  const userId = req.params.userId
  res.json({ message: `Delete user with ID ${userId}` })
})

export default userRouter

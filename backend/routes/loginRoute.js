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

    // console.log(`Queried user from database: ${user}`) // Log the queried user

    if (!user) {
      return res.status(404).json("No Record Existed")
    }
    const hash = await bcrypt.hash(password, 2)

    const isPasswordValid = bcrypt.compare(hash, user.register.password)
    if (!isPasswordValid) {
      return res.status(401).json("The password is incorrect")
    }

    const accessToken = jwt.sign(
      { userId: user._id, email: user.register.email, name: user.register.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    )
    const refreshToken = jwt.sign(
      { userId: user._id, email: user.register.email },
      "REFERSH_TOKEN",
      { expiresIn: "7d" }
    )
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    })
    res.status(200).json({ accessToken })
  } catch (error) {
    console.error("Error during login process:", error) // Log any error
    res.status(500).json({ message: error.message })
  }
})
//////////
//////////
loginRouter.post("/refresh-token", (req, res) => {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken) {
    return res
      .status(401)
      .json({ message: "Refresh Token not found, please log in again" })
  }

  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid Refresh Token" })
      }

      const newAccessToken = jwt.sign(
        { userId: user.userId, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      )

      res.status(200).json({ accessToken: newAccessToken })
    })
  } catch (error) {
    console.error("Error during token refresh process:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
})
loginRouter.get("/", async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findOne({ id })
    console.log(user.register.name)
    console.log("hello")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json(user.register.name)
  } catch (error) {
    console.error("Error fetching user details:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
})
export default loginRouter

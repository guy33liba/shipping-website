import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import express from "express"
import User from "../model/userSchema.js"
import bcrypt from "bcryptjs"

const loginRouter = express.Router()
dotenv.config()

// Login route
loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body.login
  try {
    const user = await User.findOne({ "register.email": email })

    if (!user) {
      return res.status(404).json("No Record Existed")
    }

    const isPasswordValid = await bcrypt.compare(password, user.register.password)
    if (!isPasswordValid) {
      return res.status(401).json("The password is incorrect")
    }

    const accessToken = jwt.sign(
      { userId: user._id, email: user.register.email, name: user.register.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )
    const refreshToken = jwt.sign(
      { userId: user._id, email: user.register.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    )

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    })

    // Update last login time
    user.lastLogin = new Date()
    await user.save()

    res.status(200).json({ accessToken, userId: user._id }) // Include userId in response
  } catch (error) {
    console.error("Error during login process:", error)
    res.status(500).json({ message: error.message })
  }
})
// Refresh token route
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

// Fetch user details route
loginRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne(email)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Assuming user.register.name is a string
    res.status(200).json({ name: user.register.name }) // Return as JSON object
  } catch (error) {
    console.error("Error fetching user details:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
})
export default loginRouter
// import express from "express"
// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"
// import User from "../model/userSchema.js" // Adjust the import path to your User model

// const loginRouter = express.Router()

// loginRouter.post("/", async (req, res) => {
//   try {
//     const { email, password } = req.body // Directly destructure from req.body

//     const user = await User.findOne({ "register.email": email })

//     if (!user) {
//       return res.status(401).json({ error: "Invalid email" })
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password)
//     if (!passwordMatch) {
//       return res.status(401).json({ error: "Incorrect password" })
//     }

//     const token = jwt.sign({ _id: user._id }, "secret key", { expiresIn: "1h" })
//     res.status(200).json({ token })
//   } catch (error) {
//     console.error("Login error:", error) // Optional: log the error for debugging
//     res.status(500).json({ error: "Login failed" })
//   }
// })

// export default loginRouter

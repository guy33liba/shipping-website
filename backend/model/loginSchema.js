import mongoose from "mongoose"

const loginSchema = mongoose.Schema(
  {
    loginForm: {
      email: {
        type: String,
        required: [true, "Please add an email"],
      },
      password: {
        type: String,
        required: [true, "Please add a password"],
      },
    },
  },
  {
    timestamps: true,
  }
)

const Login = mongoose.model("Login", loginSchema)

export default Login

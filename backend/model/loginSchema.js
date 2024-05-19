import mongoose from "mongoose"

const loginSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true,
  },
)

const Login = mongoose.model("Login", loginSchema)

export default Login

import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    role: { type: String, required: true },
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)
export default User

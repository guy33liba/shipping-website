import mongoose from "mongoose"
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
})
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true, lowercase: true },
  createdAt: Date,
  updatedAt: Date,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
})
const User = mongoose.model("User", userSchema)
export default User

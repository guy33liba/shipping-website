import mongoose from "mongoose"
import User from "./User.js"
const mongodbUrl =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"

mongoose.connect(mongodbUrl, console.log("connected to mongodb"))
run()
async function run() {
  try {
    const user = await User.create({
      name: "Kyle",
      age: 26,
      email: "HELLO@world",
      hobbies: ["weight Lifting", "bowling "],
      address: { street: "26 Main Street" },
    })
    console.log(user)
    user.name = "sally"
    await user.save()
  } catch (error) {
    console.log(error.message)
  }
}

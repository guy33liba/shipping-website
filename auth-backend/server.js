import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const mongoURI =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log("Connect mongoDB")
  } catch (error) {
    console.error(error.message)
  }
}
export default connectDB

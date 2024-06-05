import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log("Connect mongoDB")
  } catch (error) {
    console.error(error.message)
  }
}
export default connectDB

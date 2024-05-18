import products from "../products/products.js"
import mongoose from "mongoose"
import ProductsList from "../model/productSchema.js"
import { mongoURI } from "../server.js"

export const seedProducts = async () => {
  try {
    await mongoose.connect(mongoURI)
    await ProductsList.deleteMany({})
    await ProductsList.insertMany(products)
  } catch (error) {
    console.error("Error seeding products:", error.message)
    process.exit(1)
  }
}

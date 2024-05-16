import products from "../products/products.js"
import mongoose from "mongoose"
import ProductsList from "../model/productSchema.js"
import { mongoURI } from "../server.js"

const seedProducts = async () => {
  try {
    await mongoose.connect(mongoURI)
    await ProductsList.deleteMany({})
    await ProductsList.insertMany(products)
    console.log("Products seeded successfully!")
  } catch (error) {
    console.error("Error seeding products:", error.message)
    process.exit(1)
  }
}
seedProducts()

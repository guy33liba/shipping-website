import express from "express"
import ProductsList from "../model/productSchema.js"

const singleProductRoute = express.Router()
singleProductRoute.post("/", async (req, res) => {
  const { name } = req.body
  try {
    const product = await ProductsList.findOne({ name })
    console.log(product)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.status(200).json(product)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: error.message })
  }
})
export default singleProductRoute

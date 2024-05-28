import Shipping from "../model/shippingSchema.js"
import express from "express"
const singleProductRoute = express.Router()
singleProductRoute.get("/", async (req, res) => {
  const { id } = req.params
  try {
    const product = await Shipping.findById(id)
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

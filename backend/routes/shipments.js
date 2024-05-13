import Shipping from "../model/shippingSchema.js"
import express from "express"

const shippingRouter = express.Router()

// GET all shipments with shipping addresses
shippingRouter.get("/shipments", async (req, res) => {
  try {
    const { address } = req.query
    const shipments = await Shipping.find({ address })
    res.json(shipments)
    console.log(shipments)
  } catch (error) {
    console.error(error) // Log the error to console
    res.status(500).json({ message: error.message })
  }
})
shippingRouter.post("/shipments", async (req, res) => {
  try {
    const { address, city, postalCode, country } = req.body.shippingAddress
    const shipping = new Shipping({ address, city, postalCode, country })
    const savedShipping = await shipping.save()
    res.status(201).json(savedShipping)
    console.log(shippingAddress)
  } catch (error) {
    console.log(error.message)
  }
})
export default shippingRouter

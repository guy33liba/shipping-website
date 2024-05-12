import Shipping from "../model/shippingSchema.js"
import express from "express"

const shippingRouter = express.Router()

// GET all shipments with shipping addresses
shippingRouter.get("/shipments", async (req, res) => {
  try {
    const shipments = await Shipping.find({})
    console.log(shipments)
    res.json(shipments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

shippingRouter.post("/shipments", async (req, res) => {
  try {
    const { shippingAddress } = req.body
    const shipping = new Shipping({ shippingAddress })
    const savedShipping = await shipping.save()
    res.status(201).json(savedShipping)
    console.log(shippingAddress)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
export default shippingRouter

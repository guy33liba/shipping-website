import Shipping from "../model/shippingSchema.js"
import express from "express"

const shippingRouter = express.Router()

// GET all shipments with shipping addresses
shippingRouter.get("/", async (req, res) => {
  try {
    const shipments = await Shipping.find()
    res.json(shipments)
  } catch (error) {
    console.error(error) // Log the error to console
    res.status(500).json({ message: "Internal server error" })
  }
})

// POST a new shipment
shippingRouter.post("/", async (req, res) => {
  const { shippingAddress, paymentMethod } = req.body
  const shipping = new Shipping({
    shippingAddress,
    paymentMethod,
  })
  try {
    const savedShipping = await shipping.save()
    res.status(201).json(savedShipping)
    console.log(savedShipping)
  } catch (error) {
    console.error(error.message)
  }
})

export default shippingRouter

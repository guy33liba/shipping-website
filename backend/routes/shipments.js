import Order from "../model/ordersSchema.js"
import express from "express"

const shippingRouter = express.Router()

// GET all shipments with shipping addresses
shippingRouter.get("/shipments", async (req, res) => {
  try {
    // Populate the 'shippingAddress' field to get the complete shipping address details
    const shipments = await Order.shippingAdress.find({})
    res.json(shipments)
    console.log(shipments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

shippingRouter.post("/shipments", async (req, res) => {
  try {
    const { newShipment } = req.body
    const order = new Order({ newShipment })
    const savedOrder = await order.save()
    res.status(201).json(savedOrder)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
export default shippingRouter

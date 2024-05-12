import Order from "../model/ordersSchema.js"
import express from "express"

const shippingRouter = express.Router()

// GET all shipments with shipping addresses
shippingRouter.get("/shipments", async (req, res) => {
  try {
    const shipments = await Order.find({})
    console.log(shipments)
    res.json(shipments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

shippingRouter.post("/shipments", async (req, res) => {
  try {
    const { shippingAddress } = req.body
    const order = new Order({ shippingAddress })
    const savedOrder = await order.save()
    res.status(201).json(savedOrder)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
export default shippingRouter

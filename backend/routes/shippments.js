import Order from "../model/ordersSchema.js"
import express from "express"

const shippingRouter = express.Router()

// GET all shipmments with shipping addresses
shippingRouter.get("/shipmments", async (req, res) => {
  try {
    // Populate the 'shippingAddress' field to get the complete shipping address details
    const shipmments = await Order.find({}).populate("shippingAddress")
    res.json(shipmments)
    console.log(shipmments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

shippingRouter.post("/shippiments", async (req, res) => {
  try {
    const { shippingAddress } = req.body
    const order = new Order({ shippingAddress })
    const savedOrder = await order.save()
    res.status(201).json(savedOrder)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
//
shippingRouter.put("/shipmments/:id", async (req, res) => {
  const { id } = req.params
  try {
    const updatedShipment = await Order.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedShipment) {
      res.status(404).json({ message: "Shipment not found" })
      console.log("Shipment not found")
    }
    res.json(updatedShipment)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
//
shippingRouter.delete("/shipmments/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deletedShipment = await Order.findByIdAndDelete(id)
    if (!deletedShipment) {
      return res.status(404).json({ message: "Shipment not found" })
    }
    res.json({ message: "Shipment deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default shippingRouter

import mongoose from "mongoose"
import express from "express"
import OrdersList from "../model/ordersSchema.js"
import express from "express"

const ordersRouter = express.Router()

// GET all shipments with shipping addresses
ordersRouter.get("/", async (req, res) => {
  try {
    const newOroductList = await OroductLIst.find({})
    res.json(newOroductList)
  } catch (error) {
    console.error(error) // Log the error to console
    res.status(500).json({ message: "Internal server error" })
  }
})

// POST a new shipment
ordersRouter.post("/", async (req, res) => {
  const { ordersList, reviews } = req.body
  const shipping = new OroductLIst({
    ordersList,
    reviews,
  })
  try {
    const savedShipping = await shipping.save()
    console.log(savedShipping)
    res.status(201).json(savedShipping)
  } catch (error) {
    console.error(error.message)
  }
})

export default ordersRouter

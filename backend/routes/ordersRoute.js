import mongoose from "mongoose"
import express from "express"
import ProductsList from "../model/productSchema"

const ordersRouter = express.Router()

// GET all shipments with shipping addresses
ordersRouter.get("/", async (req, res) => {
  try {
    const newOroductList = await ProductsList.find({})
    res.json(newOroductList)
  } catch (error) {
    console.error(error) // Log the error to console
    res.status(500).json({ message: "Internal server error" })
  }
})

// POST a new shipment
ordersRouter.post("/", async (req, res) => {
  const { ProductsList, reviews } = req.body
  const shipping = new ProductsList({
    ProductsList,
    reviews,
  })
  try {
    const savedShipping = await shipping.save()
    res.status(201).json(savedShipping)
  } catch (error) {
    console.error(error.message)
  }
})

export default ordersRouter

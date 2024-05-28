import Shipping from "../model/shippingSchema"
import express from "express"
shippingRouter.post("/", async (req, res) => {
  const { name, image, brand, category, description, price, countInStock } = req.body
  console.log(shippingAddress)
  const product = new Shipping({
    name,
    image,
    brand,
    category,
    description,
    price,
    countInStock,
  })
  try {
    const savedShipping = await shipping.save()
    res.status(201).json(savedShipping)
  } catch (error) {
    console.error(error.message)
  }
})

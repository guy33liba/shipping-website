import mongoose from "mongoose"
import express from "express"
import ProductsList from "../model/productSchema.js"
const productRouter = express.Router()

productRouter.get("/", async (req, res) => {
  try {
    const newProductList = await ProductsList.find({})
    res.send(newProductList)
  } catch (error) {
    console.log(error.message)
  }
})

productRouter.post("/", async (req, res) => {
  const { reviews, productList } = req.body
  const newProductList = new ProductsList({
    productList,
    reviews,
  })
  try {
    const savedProductList = await newProductList.save()
    console.log(savedProductList)
    res.status(201).json(savedProductList)
  } catch (error) {
    console.error(error.message)
  }
})

export default productRouter

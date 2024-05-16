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

export default productRouter

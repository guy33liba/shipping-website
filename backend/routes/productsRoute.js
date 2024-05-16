import express from "express"
import ProductsList from "../model/productSchema.js"
import products from "../products/products.js"
const productRouter = express.Router()

productRouter.get("/", async (req, res) => {
  try {
    const newProductList = await ProductsList.find({})
    console.log(newProductList)
    res.send(products)
  } catch (error) {
    console.log(error.message)
  }
})

export default productRouter

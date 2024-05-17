import express from "express"
import ProductsList from "../model/productSchema.js"
import products from "../products/products.js"
import { seedProducts } from "../products/seedProducts.js"
const productRouter = express.Router()

productRouter.get("/", async (req, res) => {
  try {
    const newProductList = await ProductsList.find({})
    res.send(products)
    seedProducts()
    console.log(newProductList)
  } catch (error) {
    console.log(error.message)
  }
})

export default productRouter

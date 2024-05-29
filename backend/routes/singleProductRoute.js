// import express from "express"
// import ProductsList from "../model/productSchema.js"

// const singleProductRoute = express.Router()
// singleProductRoute.post("/:id", async (req, res) => {
//   const { name } = req.body
//   const { id } = req.params
//   try {
//     const product = await ProductsList.findOne({ id })
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" })
//     }
//     res.status(200).json(product)
//   } catch (error) {
//     console.error(error.message)
//     res.status(500).json({ message: error.message })
//   }
// })
// export default singleProductRoute
import express from "express"
import ProductsList from "../model/productSchema.js"

const singleProductRoute = express.Router()

// Use GET for retrieving a product by id
singleProductRoute.get("/", async (req, res) => {
  const { id } = req.params
  try {
    // Assuming id is a custom field, not the MongoDB _id
    const product = await ProductsList.findOne({ id })

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json(product)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: error.message })
  }
})

export default singleProductRoute

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 5000 // Your desired port

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping",
    {},
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err))

// Define a schema and model for your data
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
})

const Item = mongoose.model("Item", itemSchema)

// Define a route to fetch a single item
app.get("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    if (!item) {
      return res.status(404).json({ message: "Item not found" })
    }
    res.json(item)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

const items = [
  { name: "Item 1", description: "Description for Item 1" },
  { name: "Item 2", description: "Description for Item 2" },
  { name: "Item 3", description: "Description for Item 3" },
]

const populateDB = async () => {
  try {
    await Item.deleteMany() // Clear the existing items
    await Item.insertMany(items) // Insert new items
    console.log("Database populated with sample items")
  } catch (err) {
    console.error("Error populating database:", err)
  } finally {
    mongoose.connection.close()
  }
}

populateDB()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

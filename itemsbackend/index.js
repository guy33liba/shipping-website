const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 5000 // Your desired port

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/yourDatabaseName", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

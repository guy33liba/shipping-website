const mongoose = require("mongoose")

const mongodbUrl =
  "mongodb+srv://guy33liba:g33g33g33@shipping.bnmim8g.mongodb.net/?retryWrites=true&w=majority&appName=shipping"

mongoose.connect(mongodbUrl, console.log("connected to mongodb"))

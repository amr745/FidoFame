const mongoose = require("mongoose")

const fidoSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Image: { type: String, required: true },
  Breed: { type: String, required: true },
  Claim To Fame: { type: String, required: true },
  Description: { type: String, required: true },
  completed: Boolean,
})

const Fido = mongoose.model("Fido", fidoSchema)

module.exports = Fido
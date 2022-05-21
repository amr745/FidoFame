const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const fidoSchema = new mongoose.Schema({
  name: { type: String, required: false },
  image: { type: String, required: false },
  breed: { type: String, required: false },
  renown: { type: String, required: false },
  description: { type: String, required: false},
  deceased: Boolean,
});

const Fido = mongoose.model("Fido", fidoSchema)

module.exports = Fido
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const fidoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  breed: { type: String, required: true },
  renown: { type: String, required: true },
  description: { type: String, required: true},
  deceased: Boolean,
});

const Fido = mongoose.model("Fido", fidoSchema)

module.exports = Fido
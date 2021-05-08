const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  scientific_name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
});

const Plants = mongoose.model("Plants", plantSchema);

module.exports = Plants;
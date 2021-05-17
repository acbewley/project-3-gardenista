const mongoose = require("mongoose");
const { default: Journal } = require("../client/src/pages/Journal");
const Schema = mongoose.Schema;

const journalSchema = new Schema ({
    title: { type: String, required: true },
    text: { type: String, required: true }
});

const Entries = mongoose.model("Entries", journalSchema);

module.exports = Entries;

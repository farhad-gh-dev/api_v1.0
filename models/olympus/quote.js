const mongoose = require("mongoose");

const quoteModel = new mongoose.Schema({
  quote: {
    type: String,
    min: 10,
    max: 300,
    lowercase: true,
    required: true,
  },
  quotee: {
    type: String,
    min: 5,
    max: 100,
    lowercase: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("olympus-Quote", quoteModel);

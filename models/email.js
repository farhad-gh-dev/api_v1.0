const mongoose = require("mongoose");

const emailModel = new mongoose.Schema({
  name: {
    type: String,
    min: 1,
    max: 26,
    required: true,
  },
  email: {
    type: String,
    min: 3,
    max: 64,
    required: true,
  },
  location: {
    type: String,
    min: 0,
    max: 95,
  },
  message: {
    type: String,
    min: 1,
    max: 850,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Email", emailModel);

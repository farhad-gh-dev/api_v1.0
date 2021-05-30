const mongoose = require("mongoose");

const godModel = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 50,
    lowercase: true,
    required: true,
  },
  info: {
    type: String,
    min: 10,
    max: 300,
    lowercase: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("olympus-god", godModel);

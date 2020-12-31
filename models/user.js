const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: {
    type: String,
    min: 6,
    max: 65,
    required: true,
  },
  email: {
    type: String,
    min: 6,
    max: 65,
    required: true,
  },
  password: {
    type: String,
    min: 8,
    max: 255,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userModel);

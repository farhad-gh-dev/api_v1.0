const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: {
    type: String,
    min: 6,
    max: 65,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    min: 3,
    max: 254,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 8,
    max: 500,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userModel);

const mongoose = require("mongoose");

const godModel = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 50,
    lowercase: true,
    required: true,
  },
  index: {
    type: Number,
    required: true,
    unique: true,
  },
  categories: [
    {
      title: {
        type: String,
        min: 3,
        max: 50,
        required: true,
        lowercase: true,
      },
      description: {
        type: String,
        min: 100,
        required: true,
        lowercase: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("olympus-god", godModel);

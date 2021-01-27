const { object } = require("joi");
const mongoose = require("mongoose");

const yummyMenuMenusModel = new mongoose.Schema({
  restaurantName: {
    type: Object,
    min: 6,
    max: 65,
    required: true,
  },
  restaurantMenu: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("YummyMenuMenus", yummyMenuMenusModel);

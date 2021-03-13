const mongoose = require("mongoose");

const yummyMenuOrderModel = new mongoose.Schema({
  restaurantName: {
    type: String,
    min: 4,
    max: 65,
    required: true,
  },
  order: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("YummyMenuOrders", yummyMenuOrderModel);

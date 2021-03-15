const mongoose = require("mongoose");

const yummyMenuOrderModel = new mongoose.Schema({
  restaurantId: {
    type: String,
    min: 4,
    max: 65,
    required: true,
  },
  order: [
    {
      type: Object,
      required: true,
    },
  ],
});

module.exports = mongoose.model("YummyMenuOrders", yummyMenuOrderModel);

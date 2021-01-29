const mongoose = require("mongoose");

const yummyMenuMenusModel = new mongoose.Schema({
  restaurantName: {
    type: String,
    min: 6,
    max: 65,
    required: true,
  },
  restaurantMenu: {
    burger: {
      popular: [
        {
          title: {
            type: String,
            min: 4,
            max: 40,
            required: true,
          },
          description: {
            type: String,
            min: 20,
            max: 200,
            required: true,
          },
          image: {
            type: String,
            max: 150,
            required: true,
          },
        },
      ],
      beaf: [
        {
          title: {
            type: String,
            min: 4,
            max: 40,
            required: true,
          },
          description: {
            type: String,
            min: 20,
            max: 200,
            required: true,
          },
          image: {
            type: String,
            max: 150,
            required: true,
          },
        },
      ],
      chicken: [
        {
          title: {
            type: String,
            min: 4,
            max: 40,
            required: true,
          },
          description: {
            type: String,
            min: 20,
            max: 200,
            required: true,
          },
          image: {
            type: String,
            max: 150,
            required: true,
          },
        },
      ],
    },
    pizza: {
      popular: [
        {
          title: {
            type: String,
            min: 4,
            max: 40,
            required: true,
          },
          description: {
            type: String,
            min: 20,
            max: 200,
            required: true,
          },
          image: {
            type: String,
            max: 150,
            required: true,
          },
        },
      ],
      other: [
        {
          title: {
            type: String,
            min: 4,
            max: 40,
            required: true,
          },
          description: {
            type: String,
            min: 20,
            max: 200,
            required: true,
          },
          image: {
            type: String,
            max: 150,
            required: true,
          },
        },
      ],
    },
    drink: {
      popular: [
        {
          title: {
            type: String,
            min: 4,
            max: 40,
            required: true,
          },
          description: {
            type: String,
            min: 20,
            max: 200,
            required: true,
          },
          image: {
            type: String,
            max: 150,
            required: true,
          },
        },
      ],
      cold: [
        {
          title: {
            type: String,
            min: 4,
            max: 40,
            required: true,
          },
          description: {
            type: String,
            min: 20,
            max: 200,
            required: true,
          },
          image: {
            type: String,
            max: 150,
            required: true,
          },
        },
      ],
      hot: [
        {
          title: {
            type: String,
            min: 4,
            max: 40,
            required: true,
          },
          description: {
            type: String,
            min: 20,
            max: 200,
            required: true,
          },
          image: {
            type: String,
            max: 150,
            required: true,
          },
        },
      ],
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("YummyMenuMenus", yummyMenuMenusModel);

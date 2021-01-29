const express = require("express");
const route = express.Router();

const registerMenu = require("./registerMenu");

// const registerUser = require("./register");
// const loginUser = require("./login");

route.get("/:restaurant_name", (req, res) => {
  res.json({
    restaurant_name: req.params.restaurant_name,
    query: req.query,
  });
});
route.post("/", registerMenu);

module.exports = route;

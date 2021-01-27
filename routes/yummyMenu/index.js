const express = require("express");
const route = express.Router();

// const registerUser = require("./register");
// const loginUser = require("./login");

route.post("/", (req, res) => {
  res.send("yummy-menu...");
});
// route.get("/", loginUser);
// route.get("/", loginUser);
// route.get("/drink", loginUser);

module.exports = route;

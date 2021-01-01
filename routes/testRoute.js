const express = require("express");
const route = express.Router();

const verifyToken = require("../middlewares/verifyToken");

route.get("/", verifyToken, (req, res) => {
  res.send("hello from test route");
});

module.exports = route;

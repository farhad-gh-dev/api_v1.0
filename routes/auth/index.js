const express = require("express");
const route = express.Router();
const verifyToken = require("../../middlewares/verifyToken");

const registerUser = require("./register");
const loginUser = require("./login");

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/user", verifyToken, (req, res) => {
  res.json({ result: res.user });
});

module.exports = route;

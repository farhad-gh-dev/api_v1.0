const express = require("express");
const route = express.Router();

const registerUser = require("./register");
const loginUser = require("./login");

route.post("/register", registerUser);
route.post("/login", loginUser);

module.exports = route;

const express = require("express");
const route = express.Router();

const registerEmail = require("./registerEmail");

route.post("/", registerEmail);

module.exports = route;

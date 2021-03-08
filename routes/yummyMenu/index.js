const express = require("express");
const route = express.Router();

const verifyToken = require("../../middlewares/verifyToken");
const getMenu = require("./getMenu");
const registerMenu = require("./registerMenu");

route.get("/:restaurantName", getMenu);
route.post("/", registerMenu);

module.exports = route;

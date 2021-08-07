const express = require("express");
const route = express.Router();

const verifyToken = require("../../middlewares/verifyToken");
const getMenu = require("./getMenu");
const registerMenu = require("./registerMenu");
const registerOrder = require("./registerOrder");

route.get("/menu/:restaurantName", verifyToken, getMenu);
route.post("/", verifyToken, registerMenu);
route.post("/order", verifyToken, registerOrder);

module.exports = route;

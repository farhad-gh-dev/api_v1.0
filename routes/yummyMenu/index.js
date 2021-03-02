const express = require("express");
const route = express.Router();

const verifyToken = require("../../middlewares/verifyToken");
const getMenu = require("./getMenu");
const registerMenu = require("./registerMenu");
const updateUser = require("./updateUser");

route.get("/:restaurantName", getMenu);
route.post("/", registerMenu);
route.put("/", verifyToken, updateUser);

module.exports = route;

const express = require("express");
const route = express.Router();

const getMenu = require("./getMenu");
const registerMenu = require("./registerMenu");
const updateUser = require("./updateUser");

route.get("/:restaurantName", getMenu);
route.post("/", registerMenu);
route.put("/", updateUser);

module.exports = route;

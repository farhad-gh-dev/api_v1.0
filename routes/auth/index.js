const express = require("express");
const route = express.Router();
const verifyToken = require("../../middlewares/verifyToken");

const registerUser = require("./register");
const loginUser = require("./login");
const userInfo = require("./userInfo");
const passwordReset = require("./passwordReset");

route.post("/register", registerUser);
route.post("/login", loginUser);
route.get("/user", verifyToken, userInfo);
route.post("/password-reset", verifyToken, passwordReset);

module.exports = route;

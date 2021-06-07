const express = require("express");
const route = express.Router();

// const registerQuote = require("./registerQuote");
const getQuotes = require("./getQuotes");
const registerGod = require("./registerGod");
const getAllGods = require("./getAllGods");

// route.post("/quote", registerQuote);
route.get("/quote", getQuotes);
route.post("/gods", registerGod);
route.get("/gods", getAllGods);

module.exports = route;

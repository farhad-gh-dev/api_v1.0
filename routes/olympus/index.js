const express = require("express");
const route = express.Router();

// const registerQuote = require("./registerQuote");
// const registerGod = require("./registerGod");
const getQuotes = require("./getQuotes");
const getAllGods = require("./getAllGods");
const getEachGod = require("./getEachGod");

// route.post("/quote", registerQuote);
// route.post("/gods", registerGod);
route.get("/quote", getQuotes);
route.get("/gods", getAllGods);
route.get("/gods/:name", getEachGod);

module.exports = route;

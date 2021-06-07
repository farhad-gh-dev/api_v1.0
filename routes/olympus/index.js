const express = require("express");
const route = express.Router();

// const registerQuote = require("./registerQuote");
const getQuotes = require("./getQuotes");
const registerGod = require("./registerGod");
const getAllGods = require("./getAllGods");
const getEachGod = require("./getEachGod");

// route.post("/quote", registerQuote);
route.get("/quote", getQuotes);
route.post("/gods", registerGod);
route.get("/gods", getAllGods);
route.get("/gods/:name", getEachGod);

module.exports = route;

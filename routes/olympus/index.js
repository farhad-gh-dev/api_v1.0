const express = require("express");
const route = express.Router();

// const registerQuote = require("./registerQuote");
const getQuotes = require("./getQuotes");

// route.post("/quote", registerQuote);
route.get("/quote", getQuotes);

module.exports = route;

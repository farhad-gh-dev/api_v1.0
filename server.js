require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const server = express();

const PORT = process.env.PORT || 3000;

//DATABASE SETUP
const uri = process.env.DB_ADDRESS;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db_connection = mongoose.connection;
db_connection.once("open", () => {
  console.log("connected to database...");
});

server.get("/", (req, res) => {
  res.send("hello");
});

server.listen(PORT, () => {
  console.log("server is started on port " + PORT + "...");
});

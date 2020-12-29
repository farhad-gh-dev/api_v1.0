require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const server = express();

//IMPORT ROUTES
const indexRoute = require("./routes/index");

const PORT = process.env.PORT || 3000;

//USE ROUTES
server.use("/", indexRoute);

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

server.listen(PORT, () => {
  console.log("server is started on port " + PORT + "...");
});

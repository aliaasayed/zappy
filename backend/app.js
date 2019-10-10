const express = require("express");
const server = express();
const mongoose = require("mongoose");

server.use(function (req, resp, next) {
  resp.header("Access-Control-Allow-Origin", "*");
  resp.header("Access-Control-Allow-Headers", "Content-Type");
  resp.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

mongoose.connect("mongodb://localhost:27017/Zappy");


const tweetsRouter = require('./controllers/tweeterController')
server.use("/", tweetsRouter);


server.listen(3000, function () {
  console.log("Starting listen...");
});

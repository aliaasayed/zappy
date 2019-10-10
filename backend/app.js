const express = require("express");
const server = express();
const mongoose = require("mongoose");
const slack = require("./services/slackService");

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

mongoose.connect("mongodb://localhost:27017/Zappy",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

slack.listen((err) => {
  if (err)
    console.log(err);
});

const tweetsRouter = require('./controllers/twitterController')
server.use("/", tweetsRouter);

server.listen(3000, function () {
  console.log("Starting listen...");
});

const express = require("express");
const app = express();

// Finish this function and use it in the routes below
const sendFruitResponse = (req, res, next) => {};

app.get("/whatis/apple", (req, res, next) => {
  res.send("fruit");
});

app.get("/whatis/orange", (req, res, next) => {
  res.send("fruit");
});

app.get("/whatis/banana", (req, res, next) => {
  res.send("fruit");
});

// export app for use in main.js and for testing
module.exports = {
  app,
};

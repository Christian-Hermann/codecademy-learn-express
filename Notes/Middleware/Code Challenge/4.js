const express = require("express");
const app = express();
const { createWriteStream } = require("fs");
// Add your code after this line
const morgan = require("morgan");
app.use(
  morgan("short", {
    stream: createWriteStream("app.log", {
      flags: "a",
    }),
  })
);

// Add your code before this line

app.get("/say-hi", (req, res, next) => {
  res.send("Hi!");
});

app.get("/say-bye", (req, res, next) => {
  res.send("Bye!");
});

// export app for use in main.js and for testing
module.exports = {
  app,
};

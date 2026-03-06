// WRITING YOUR FIRST ROUTE
const express = require("express");
const app = express();

// Use static server to serve the Express Yourself Website
app.use(express.static("public"));

// Open a call to `app.get()` here:
app.get("/expressions", (req, res) => {
  console.log(req);
});

// export app for use in main.js and for testing
module.exports = { app };

// MATCHING ROUTE PATHS - Will bypass until it finds the matching route
app.get("/another-route", (req, res, next) => {
  // route handling
});

app.get("/expressions", (req, res, next) => {
  res.send();
});

// GETTING A SINGLE EXPRESSION
const express = require("express");
const app = express();

// Serves Express Yourself website
app.use(express.static("public"));

const { getElementById, seedElements } = require("./utils");

const expressions = [];
seedElements(expressions, "expressions");

app.get("/expressions", (req, res, next) => {
  res.send(expressions);
});

app.get("/expressions/:id", (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  res.send(foundExpression);
});

// export app for use in main.js and for testing
module.exports = { app };

// BASIC PUT REQUEST
// Add your PUT route handler here:
app.put("/expressions/:id", (req, res, next) => {});

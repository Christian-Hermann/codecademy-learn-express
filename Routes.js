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

// USING QUERIES
app.put("/expressions/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);

  if (expressionIndex != -1) {
    const updatedExpression = updateElement(
      req.params.id,
      req.query,
      expressions
    );

    res.send(updatedExpression);
  } else {
    res.status(404).send();
  }
});

// CREATING AN EXPRESSION
app.post("/expressions", (req, res, next) => {
  const newExpression = createElement("expressions", req.query);
  if (newExpression) {
    expressions.push(newExpression);
    res.status(201).send(newExpression);
  } else {
    res.status(400).send();
  }
});

// DELETING OLD EXPRESSIONS
app.delete("/expressions/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

// ADDING ANIMAL ROUTES
app.get("/animals", (req, res, next) => {
  res.send(animals);
});

app.get("/animals/:id", (req, res, next) => {
  const foundAnimal = getElementById(req.params.id, animals);
  if (foundAnimal) {
    res.send(foundAnimal);
  } else {
    res.status(404).send();
  }
});

app.put("/animals/:id", (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(animals[animalIndex]);
  } else {
    res.status(404).send();
  }
});

app.post("/animals", (req, res, next) => {
  const receivedAnimal = createElement("animals", req.query);
  if (receivedAnimal) {
    animals.push(receivedAnimal);
    res.status(201).send(receivedAnimal);
  } else {
    res.status(400).send();
  }
});

app.delete("/animals/:id", (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    animals.splice(animalIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

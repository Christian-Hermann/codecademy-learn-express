// Express.Router
const expressionsRouter = express.Router();
app.use("/expressions", expressionsRouter);

expressionsRouter.get("/", (req, res, next) => {
  res.send(expressions);
});

// USING MULTIPLE ROUTER FILES
const express = require("express");
const { seedElements } = require("./utils");
const expressionsRouter = express.Router();

const expressions = [];
seedElements(expressions, "expressions");

expressionsRouter.get("/", (req, res, next) => {
  res.send(expressions);
});

module.exports = expressionsRouter;

// REFACTORING EXPRESSIONS ROUTES
const express = require("express");
const {
  seedElements,
  getElementById,
  createElement,
  updateElement,
  getIndexById,
} = require("./utils");

let expressions = [];
seedElements(expressions, "expressions");

const expressionsRouter = express.Router();

module.exports = expressionsRouter;

// Get all expressions
expressionsRouter.get("/", (req, res, next) => {
  res.send(expressions);
});

expressionsRouter.get("/:id", (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

expressionsRouter.put("/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

expressionsRouter.post("/", (req, res, next) => {
  const receivedExpression = createElement("expressions", req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

expressionsRouter.delete("/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

// CODE CHALLENGE
const express = require("express");
const app = express();

const buildingMaterials = {
  wood: ["plywood", "2x4s", "cedar shingles"],
  metal: ["steel girders", "wall studs", "rebar"],
};

app.get("/metals", (req, res, next) => {
  const arrayToSend = buildingMaterials.metal;
  res.send(arrayToSend);
});

// export app for use in main.js and for testing
module.exports = {
  app,
};

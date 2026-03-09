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

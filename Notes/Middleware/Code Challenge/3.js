const express = require("express");
const app = express();

const foods = ["pasta carbonara", "bánh mì", "cucumber salad"];

app.get("/foods/:index", (req, res, next) => {
  if (foods[req.params.index]) {
    res.send(req.params.index);
  } else {
    const err = Error("Invalid index!");
    err.status = 404;
    next(err);
  }
});

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
};

app.use(errorHandler);

// export app for use in main.js and for testing
module.exports = {
  app,
};

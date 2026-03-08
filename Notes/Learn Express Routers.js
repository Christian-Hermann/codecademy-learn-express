// Express.Router

expressionsRouter.get("/", (req, res, next) => {
  res.send(expressions);
});

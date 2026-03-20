// DRYING CODE WITH FUNCTIONS
const logRequest = (verb) => {
  console.log(`${verb} Request Received`);
};

// DRYING ROUTES WITH app.use()
app.use((req, res, next) => {
  console.log(`${req.method} Request Received`);
});

// ROUTE-LEVEL app.use() - SINGLE PATH
app.use("/beans/:beanName", (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    console.log("Response Sent");
    return res.status(404).send("Bean with that name does not exist");
  }

  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});

// Route-Level app.use() - Multiple Paths
// Add your code below:
app.use(["/beans", "/beans/:beanName"], (req, res, next) => {
  let bodyData = "";
  req.on("data", (data) => {
    bodyData += data;
  });
  req.on("end", () => {
    if (bodyData) {
      req.body = JSON.parse(bodyData);
    }
    next();
  });
});

// MIDDLEWARE STACKS
const bodyParser = (req, res, next) => {
  let bodyData = "";
  req.on("data", (data) => {
    bodyData += data;
  });
  req.on("end", () => {
    if (bodyData) {
      req.body = JSON.parse(bodyData);
    }
    next();
  });
};

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
  }
  res.status(err.status).send(err.message);
});

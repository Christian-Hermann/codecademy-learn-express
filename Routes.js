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

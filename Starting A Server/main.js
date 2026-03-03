// Import the Express app here
const { app } = require("./app.js");

// Designate which PORT the server will listen on
const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method here:
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

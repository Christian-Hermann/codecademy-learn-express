// DRYING CODE WITH FUNCTIONS
const logRequest = (verb) => {
  console.log(`${verb} Request Received`);
};

// DRYING ROUTES WITH app.use()
app.use((req, res, next) => {
  console.log(`${req.method} Request Received`);
});

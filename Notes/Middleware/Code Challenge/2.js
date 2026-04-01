const express = require("express");
const app = express();

const moods = ["happy", "exuberant", "fanatical about middleware"];

const moodleware = (req, res, next) => {
  const randomMoodIndex = Math.floor(Math.random() * moods.length);
  req.mood = moods[randomMoodIndex];
};

app.use(moodleware);

app.get("/randomMood", (req, res, next) => {
  res.send(req.mood);
});

// export app for use in main.js and for testing
module.exports = {
  app,
};

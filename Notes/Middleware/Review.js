const express = require("express");
const app = express();

const { createWriteStream } = require("fs");
const morgan = require("morgan");

app.use(express.static("public"));

const cards = [
  {
    id: 1,
    suit: "Clubs",
    rank: "2",
  },
  {
    id: 2,
    suit: "Diamonds",
    rank: "Jack",
  },
  {
    id: 3,
    suit: "Hearts",
    rank: "10",
  },
];
let nextId = 4;

// Logging
app.use(
  morgan("tiny", { stream: createWriteStream("./app.log", { flags: "a" }) })
);

// Parsing
app.use((req, res, next) => {
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

// Get all Cards
app.get("/cards", (req, res, next) => {
  res.send(cards);
});

// Create a new Card
app.post("/cards", (req, res, next) => {
  const newCard = req.body;
  const validSuits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  const validRanks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  if (
    validSuits.indexOf(newCard.suit) === -1 ||
    validRanks.indexOf(newCard.rank) === -1
  ) {
    return res.status(400).send("Invalid card!");
  }
  newCard.id = nextId++;
  cards.push(newCard);
  res.status(201).send(newCard);
});

// Get a single Card
app.get("/cards/:cardId", (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const cardIndex = cards.findIndex((card) => card.id === cardId);
  if (cardIndex === -1) {
    return res.status(404).send("Card not found");
  }
  res.send(cards[cardIndex]);
});

// Update a Card
app.put("/cards/:cardId", (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const cardIndex = cards.findIndex((card) => card.id === cardId);
  if (cardIndex === -1) {
    return res.status(404).send("Card not found");
  }
  const newCard = req.body;
  const validSuits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  const validRanks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  if (
    validSuits.indexOf(newCard.suit) === -1 ||
    validRanks.indexOf(newCard.rank) === -1
  ) {
    return res.status(400).send("Invalid card!");
  }
  if (!newCard.id || newCard.id !== cardId) {
    newCard.id = cardId;
  }
  cards[cardIndex] = newCard;
  res.send(newCard);
});

// Delete a Card
app.delete("/cards/:cardId", (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const cardIndex = cards.findIndex((card) => card.id === cardId);
  if (cardIndex === -1) {
    return res.status(404).send("Card not found");
  }
  cards.splice(cardIndex, 1);
  res.status(204).send();
});

// export app for use in main.js and for testing
module.exports = {
  app,
};

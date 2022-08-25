const express = require("express");
const app = express();
const port = 3001;
const {
  getCheeseIngredient,
  getPieFish,
  getMushroomsIngredient,
} = require("./utils/Fetch.utils");

app.get("/", (req, res) => {
  getPieFish("Pie").then((resp) => res.send(resp));
});

app.get("/getCheeseIngredient", (req, res) => {
  getCheeseIngredient().then((resp) => res.send(resp));
});

app.get("/getBritianMeals", (req, res) => {
  getMushroomsIngredient("Pie").then((resp) => res.send(resp));
});

app.listen(port, () => console.log(`Listeneing on Port ${port}.......`));

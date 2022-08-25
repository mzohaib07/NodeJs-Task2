const axios = require("axios");
const { cheeseParser, pieParser, mushroomParser } = require("./Parser.utils");

const getCheeseIngredient = async () => {
  const data = await axios
    .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    .then((res) => {
      const cheeseIngredientResponse = cheeseParser(res.data.meals, "meals");
      return cheeseIngredientResponse;
    })
    .catch((err) => err);
  return data;
};

const getPieFish = (serchPie) => {
  const data = axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchPie}`)
    .then((res) => {
      const dishPieResponse = pieParser(res.data.meals, "meals");
      return dishPieResponse;
    })
    .catch((err) => err);
  return data;
};

const getMushroomsIngredient = async (serchPie) => {
  const data = await axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchPie}`)
    .then(async (res) => {
      const britialMealResponse = await mushroomParser(res.data.meals, "meals");
      return britialMealResponse;
    })
    .catch((err) => err);
  return data;
};

module.exports = {
  getCheeseIngredient,
  getPieFish,
  getMushroomsIngredient,
};

const pieParser = (data, prop) => {
  return data.reduce(
    (finalValue, currentValue) => {
      finalValue[prop].push({
        strMeal: currentValue.strMeal,
        strCategory: currentValue.strCategory,
        strTags: currentValue.strTags,
        strImageSource: currentValue.strImageSource,
      });
      return finalValue;
    },
    { meals: [] }
  );
};

const cheeseParser = (data, prop) => {
  const regularExpression = /cheese/gi;
  return data.reduce(
    (finalValue, currentValue) => {
      if (currentValue.strIngredient.match(regularExpression)) {
        finalValue[prop].push({
          strIngredient: currentValue.strIngredient,
        });
      }
      return finalValue;
    },
    { meals: [] }
  );
};

const mushroomParser = (data, prop) => {
  return data.reduce(
    (finalValue, currentValue) => {
      if (currentValue.strArea === "British") {
        finalValue[prop].push({
          strCategory: currentValue.strCategory,
        });
      }
      return finalValue;
    },
    { meals: [] }
  );
};

module.exports = {
  mushroomParser,
  cheeseParser,
  pieParser
}
const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((people) => people.age < 18).length;
  const adult = entrants.filter((people) => people.age >= 18 && people.age < 50).length;
  const senior = entrants.filter((people) => people.age >= 50).length;
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants) return 0;
  const quantity = Object.values(countEntrants(entrants));
  const array = ['child', 'adult', 'senior'];
  return quantity.reduce((totalPrice, peopleByAge, priceByAge) =>
    totalPrice + peopleByAge * data.prices[array[priceByAge]], 0);
};

module.exports = { calculateEntry, countEntrants };

const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalInfo = data.species.find((animals) => animals.name === animal);
  return animalInfo.residents.every((ages) => ages.age > age);
};

module.exports = getAnimalsOlderThan;

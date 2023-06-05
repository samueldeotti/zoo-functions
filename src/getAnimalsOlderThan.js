const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const dataEntries = Object.values(data)[0];

  const animalInfo = dataEntries.find((animals) => animals.name === animal);
  return animalInfo.residents.every((ages) => ages.age > age);
};

module.exports = getAnimalsOlderThan;

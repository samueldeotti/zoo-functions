const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const dataEntries = data.species; // data.species substitui esse cara
  if (!animal) {
    const obj = {};
    const quantity = dataEntries.map((size) => size.residents.length);
    dataEntries.map((animalName) => animalName.name).forEach((element, index) => {
      obj[element] = quantity[index];
    });
    return obj;
  }
  const animalObj = Object.values(animal);
  if (animalObj.length === 1) {
    return dataEntries.find((animalName) => animalName.name === animalObj[0]).residents.length;
  }
  return dataEntries.find((animalName) => animalName.name === animalObj[0])
    .residents.filter((animalSex) => animalSex.sex === animalObj[1]).length;
};

module.exports = countAnimals;

const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const dataEntries = Object.values(data)[0];
  if (!animal) {
    const obj = {};
    const name = dataEntries.map((animalName) => animalName.name);
    const quantity = dataEntries.map((size) => size.residents.length);
    name.forEach((element, index) => {
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

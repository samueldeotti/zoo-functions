const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const animalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  return Object.values([...data.species].find((specie) =>
    specie.id === animalId).residents.sort((a, b) => b.age - a.age)[0]);
};

module.exports = getOldestFromFirstSpecies;

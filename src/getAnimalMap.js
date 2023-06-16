const { species } = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

const allLocation = () => locations.reduce((acc, curr) => {
  acc[curr] = species.filter((specie) => specie.location === curr).map((specie) => specie.name);
  return acc;
}, {});

const order = (a, b, sorted) => ((sorted) ? a.localeCompare(b) : 0);

const namesAnimals = (allAnimals, sorted, sex) => locations.reduce((acc, curr) => {
  acc[curr] = [...allAnimals[curr]]
    .map((specieName) => ({ [specieName]: species.find((specie) => specie.name === specieName)
      .residents.filter((resident) => !sex || resident.sex === sex)
      .map((resident) => resident.name).sort((a, b) => order(a, b, sorted)) }));
  return acc;
}, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return allLocation();
  return namesAnimals(allLocation(), options.sorted, options.sex);
};

module.exports = getAnimalMap;

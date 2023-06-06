const data = require('../data/zoo_data');

const getSpeciesByIds = (ids, id2) => {
  if (!ids) return [];
  const dataEntries = data.species;
  if (!id2) return [dataEntries.find((specie) => specie.id === ids)];
  return dataEntries.filter((specie) => (specie.id === ids || specie.id === id2));
};

module.exports = getSpeciesByIds;

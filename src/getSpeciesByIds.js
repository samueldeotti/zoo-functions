const data = require('../data/zoo_data');

const getSpeciesByIds = (ids, id2) => {
  if (!ids) return [];
  const dataEntries = Object.values(data)[0];
  if (!id2) {
    return [dataEntries.find((specie) => specie.id === ids)];
  }

  // const teste = dataEntries.map((specie) => ((specie.id === ids || specie.id === id2) ? specie : ''));

  const arraySpecies = [];
  dataEntries.forEach((specie) => {
    if (specie.id === ids || specie.id === id2) arraySpecies.push(specie);
  });

  return arraySpecies;
};

module.exports = getSpeciesByIds;

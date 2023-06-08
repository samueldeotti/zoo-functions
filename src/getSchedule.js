const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => { // alterar usando o ...rest
  // const [x, y] = scheduleTarget, consigo colocar nome para a variavel que vier como parametro
  const arraySpecies = data.species;
  const animals = arraySpecies.some((specie) => specie.name === scheduleTarget);
  const days = Object.keys(data.hours);
  const isDay = days.some((day) => day === scheduleTarget);
  if (animals || isDay) {
    return arraySpecies.find((specie) => specie.name === scheduleTarget).availability;
  }
};

module.exports = getSchedule;

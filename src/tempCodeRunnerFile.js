const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => { // alterar usando o ...rest
  // const [x, y] = scheduleTarget, consigo colocar nome para a variavel que vier como parametro
  const arraySpecies = data.species;
  const isAnimal = arraySpecies.find((specie) =>
    specie.name === scheduleTarget).availability;

  const days = Object.keys(data.hours);
  const isDay = days.some((day) => day === scheduleTarget);

  if (isAnimal) return isAnimal;
  console.log(data.hours[scheduleTarget]);
  if (isDay) return data.hours[scheduleTarget];
};

module.exports = getSchedule;

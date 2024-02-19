const { species, hours } = require('../data/zoo_data');

const msgMonday = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const allHours = (days) => Object.keys(days).reduce((acc, day) => {
  const hoursRunning = Object.values(days[day]);
  if (day === 'Monday') {
    acc[day] = msgMonday();
  } else {
    acc[day] = {
      officeHour: `Open from ${hoursRunning[0]}am until ${hoursRunning[1]}pm`,
      exhibition: species
        .filter((specie) => specie.availability.indexOf(day) > -1)
        .map((specie) => specie.name),
    };
  }
  return acc;
}, {});

const getSchedule = (scheduleTarget) => {
  const isAnimal = species.find((specie) =>
    specie.name === scheduleTarget);
  if (isAnimal) return isAnimal.availability;
  const isDay = Object.keys(hours).find((day) => day === scheduleTarget);
  if (isDay) return ({ [scheduleTarget]: allHours(hours)[scheduleTarget] });
  return allHours(hours);
};

module.exports = getSchedule;

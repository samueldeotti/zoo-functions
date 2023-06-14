const data = require('../data/zoo_data');

const msgMonday = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const allHours = (hours) => Object.keys(hours).reduce((acc, day) => {
  const hoursRunning = Object.values(data.hours[day]);
  if (day === 'Monday') {
    acc[day] = msgMonday();
  } else {
    acc[day] = {
      officeHour: `Open from ${hoursRunning[0]}am until ${hoursRunning[1]}pm`,
      exhibition: data.species
        .filter((specie) => specie.availability.indexOf(day) > -1)
        .map((specie) => specie.name),
    };
  }
  return acc;
}, {});

const getSchedule = (scheduleTarget) => {
  const { species, hours } = data;
  const isDay = Object.keys(hours).find((day) => day === scheduleTarget);
  if (isDay) return ({ [scheduleTarget]: allHours(hours)[scheduleTarget] });
  if (!scheduleTarget) return allHours(hours);

  const isAnimal = species.find((specie) =>
    specie.name === scheduleTarget);
  if (isAnimal) return isAnimal.availability;
  return allHours(hours);
};

module.exports = getSchedule;

const data = require('../data/zoo_data');

const msgMonday = () => ({
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
});

const openingData = (day) => {
  const hours = Object.values(data.hours[day]);
  if (day === 'Monday') return { Monday: msgMonday() };
  return {
    [day]: {
      officeHour: `Open from ${hours[0]}am until ${hours[1]}pm`,
      exhibition: data.species
        .filter((specie) => specie.availability.indexOf(day) > -1)
        .map((specie) => specie.name),
    },
  };
};

const allHours = (hours) => {
  const days = Object.keys(hours);
  return days.reduce((acc, day) => {
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
};

const getSchedule = (scheduleTarget) => {
  const { species, hours } = data;
  const isDay = Object.keys(hours).find((day) => day === scheduleTarget);
  if (isDay) return openingData(scheduleTarget);
  if (!scheduleTarget) return allHours(hours);

  const isAnimal = species.find((specie) =>
    specie.name === scheduleTarget);
  if (isAnimal) return isAnimal.availability;
  return allHours(hours);
};

module.exports = getSchedule;

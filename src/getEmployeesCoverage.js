const data = require('../data/zoo_data');

const getEmployeesCoverage = ({ name, id }) => {
  if (name) {
    const { species } = data;
    const animals = species.map((specie) => ({ id: specie.id, name: specie.name }));
    console.log(animals);

    const { id, firstName, lastName, responsibleFor } = data.employees.find((employee) =>
      employee.firstName === name || employee.lastName === name);
      console.log(responsibleFor);
    return { id,
      fullName: `${firstName} ${lastName}`,
      species: animals.filter((specieId) => responsibleFor
        .find((specie) => specie === specieId.id)).map((specie) => specie.name) /* locations */ };
  }
};

module.exports = getEmployeesCoverage;

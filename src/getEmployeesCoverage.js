const data = require('../data/zoo_data');

const animals = (species, curr) => {
  const allAnimals = species.map((specie) =>
    ({ id: specie.id, name: specie.name, location: specie.location }));
  return allAnimals.filter((specieId) => curr.responsibleFor
    .find((specie) => specie === specieId.id));
};

const allEmployees = () => {
  const { species, employees } = data;

  return employees.reduce((acc, curr) => {
    const choosenAnimals = animals(species, curr);
    acc.push({ id: curr.id,
      fullName: `${curr.firstName} ${curr.lastName}`,
      species: choosenAnimals.map((specie) => specie.name),
      locations: choosenAnimals.map((specie) => specie.location),
    });
    return acc;
  }, []);
};

const getEmployeesCoverage = (employee) => {
  if (employee) {
    const isEmployee = allEmployees()
      .find((worker) => worker.fullName.indexOf(employee.name) > -1 || worker.id === employee.id);
    if (isEmployee) return isEmployee;
    throw new Error('Informações inválidas');
  }
  return allEmployees();
};

module.exports = getEmployeesCoverage;

const data = require('../data/zoo_data');

const isManager = (id) => {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  return managers.some((manager) => manager === id);
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const dataEntries = Object.values(data)[1];
    const idManagers = dataEntries.filter((element) => (element.managers[0] === managerId));
    const employees = idManagers.map((element) => `${element.firstName} ${element.lastName}`);
    return employees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };

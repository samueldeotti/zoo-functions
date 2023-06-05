const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  const dataEntries = Object.values(data)[1];
  return dataEntries.find((name) => (name.firstName === employeeName
  || name.lastName === employeeName));
};

module.exports = getEmployeeByName;

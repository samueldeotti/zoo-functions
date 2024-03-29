const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find((name) => (name.firstName === employeeName
  || name.lastName === employeeName));
};

module.exports = getEmployeeByName;

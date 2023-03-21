const list = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");
const getPeopleInCity = (list) => {
  return getFirstNames(list);
};

module.exports = getPeopleInCity;

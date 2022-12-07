const eqArrays = require('../methods/eqArrays');

//Checks if the two objects are equal
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const item in object1) {
      if (!Array.isArray(object1[`${item}`]) && (typeof object1[`${item}`] === 'object') || !Array.isArray(object2[`${item}`]) && (typeof object2[`${item}`] === 'object')) {
        return eqObjects(object1[`${item}`], object2[`${item}`]);
      }
      if (!eqArrays(object1[`${item}`], object2[`${item}`])) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;
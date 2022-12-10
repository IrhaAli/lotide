const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  // checks both objects have the same number of keys
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const item in object1) {
      // checks if either object1[item] or object2[item] are nonarray objects.
      if (!Array.isArray(object1[`${item}`]) && (typeof object1[`${item}`] === 'object') || !Array.isArray(object2[`${item}`]) && (typeof object2[`${item}`] === 'object')) {
        return eqObjects(object1[`${item}`], object2[`${item}`]);
      }
      // compares two primitives or arrays
      if (!eqArrays(object1[`${item}`], object2[`${item}`])) {
        return false;
      }
    }
    // returns true since the key value pairs are the same for both objects
    return true;
  }
  // returns false otherwise (for eg. the number of keys is different)
  return false;
};

module.exports = eqObjects;
const eqObjects = require('./eqObjects');

/**
 * Checks if the two objects are equal and outputs the appropriate message.
 * @param {object} actual the actual object.
 * @param {object} expected the object to compare against.
 * @return {undefined} console output assertion failed/passed message.
 */

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual;
const eqArrays = require('./eqArrays');

/**
 * Checks if two arrays are equal and consoles the appropriate message.
 * @param {array} actual the actual array.
 * @param {array} expected the array to compare against.
 * @return {undefined} console output assertion failed/passed message.
 */

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
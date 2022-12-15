/**
 * Checks if the two primitive values are equal and outputs the appropriate message.
 * @param {primitive} actual the actual primitive value.
 * @param {primitive} expected the primitive value to compare against.
 * @return {undefined} console output assertion failed/passed message.
 */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
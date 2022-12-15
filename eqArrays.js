/**
 * Checks if the two arrays are equal.
 * @param {array} firstArray the first array to compare.
 * @param {array} secondArray the second array to compare.
 * @return {boolean} true if arrays are equal and false otherwise.
 */

const eqArrays = function(firstArray, secondArray) {
  // ensures the two arrays are the same length
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    // in the case of same length, iterates through both arrays
    for (let i = 0; i < firstArray.length; i++) {
      // check if either of the ith elements of the arrays are an array, itself
      if ((Array.isArray(firstArray[i]) || Array.isArray(secondArray[i]))) {
        // recursively compares the elements using eqArrays as === will not work here
        if (!eqArrays(firstArray[i], secondArray[i])) {
          return false;
        }
      // for the case where both elements are primitive types
      } else if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  }
  // returns true since all elements of the arrays are the same
  return true;
};

module.exports = eqArrays;
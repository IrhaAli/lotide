/**
 * Flattens the given (nested) array.
 * @param {array} array the array to flatten.
 * @return {array} flattened array to depth 2.
 */


const flatten = function(array) {
  // the array that will be returned
  const result = [];
  // iterate over the unflattened array
  for (let i = 0; i < array.length; i++) {
    // if the element is an array add each item to result one by one
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    // in case the element is not an array add it to the result
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = flatten;
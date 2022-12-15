/**
 * Flattens the given (nested) array.
 * @param {array} array the array to flatten.
 * @return {array} flattened array
 */


const flatten = function(array) {
  // the array that will be returned
  const result = [];
  // iterate over the unflattened array
  for (let i = 0; i < array.length; i++) {
    // if the element is an array, flattens it first then adds each item to result one by one
    if (Array.isArray(array[i])) {
      const flattenedArray = flatten(array[i]);
      for (let j = 0; j < flattenedArray.length; j++) {
        result.push(flattenedArray[j]);
      }
    // in case the element is not an array add it to the result
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = flatten;
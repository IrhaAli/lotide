/**
 * Returns an array with each element from original array modified by callbackFunction.
 * @param {array} array The original array.
 * @param {function} callbackFunction the function to apply to each element.
 * @return {array} the modified array.
 */

const map = function(array, callbackFunction) {
  // the array that contains the elements that go through the callback function
  const mappedArray = [];
  // iterates through the array
  for (const element of array) {
    // uses the callback function and add them to the mappedArray
    mappedArray.push(callbackFunction(element));
  }
  return mappedArray;
};

module.exports = map;
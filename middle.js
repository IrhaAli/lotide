/**
 * Returns the middle (ie. middle item(s)) of the array.
 * @param {array} array
 * @return {array} the middle element(s) of the array.
 */

const middle = function(array) {
  // gets the whole and half length of the array
  const arrayLength = array.length;
  const halfArrayLength = arrayLength / 2;
  // breaks it to three cases: array of length at most 2, even array of length > 2 and odd array of length > 2
  if ((arrayLength === 0) || (arrayLength === 1) || (arrayLength === 2)) {
    return [];
  } else if ((arrayLength % 2) === 0) {
    return [array[halfArrayLength - 1], array[halfArrayLength]];
  } else {
    return [array[Math.floor(halfArrayLength)]];
  }
};

module.exports = middle;
const middle = function(array) {
  // gets the whole and half length of the array
  const arrayLength = array.length;
  const halfArrayLength = arrayLength / 2;
  // checks for the special case of array of length at more 2
  if ((arrayLength === 0) || (arrayLength === 1) || (arrayLength === 2)) {
    return [];
  // returns the middle two elements for even length array
  } else if ((arrayLength % 2) === 0) {
    return [array[halfArrayLength - 1], array[halfArrayLength]];
  // returns the middle element for odd length array
  } else {
    return [array[Math.floor(halfArrayLength)]];
  }
};

module.exports = middle;
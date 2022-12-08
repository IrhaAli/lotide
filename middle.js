const middle = function(array) {
  let arrayLength = array.length;
  let halfArrayLength = arrayLength / 2;
  if ((arrayLength === 1) || (arrayLength === 2)) {
    return [];
  } else if ((arrayLength % 2) === 0) {
    return [array[halfArrayLength - 1], array[halfArrayLength]];
  } else {
    return [array[Math.floor(halfArrayLength)]];
  }
};

module.exports = middle;
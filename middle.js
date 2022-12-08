const middle = function(array) {
  let result = [];
  let arrayLength = array.length;
  let halfArrayLength = arrayLength / 2;
  if ((arrayLength === 1) || (arrayLength === 2)) {
    return [];
  } else if ((arrayLength % 2) === 0) {
    result.push(array[halfArrayLength - 1], array[halfArrayLength]);
  } else {
    result.push(array[Math.floor(halfArrayLength)]);
  }
  return result;
};

module.exports = middle;
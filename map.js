const map = function(array, callbackFunction) {
  const mappedArray = [];
  for (let element of array) {
    mappedArray.push(callbackFunction(element));
  }
  return mappedArray;
};

module.exports = map;
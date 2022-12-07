//Returns an array with each element from original array modified by callbackFunction
const map = function(array, callbackFunction) {
  const updatedArray = [];
  for (let element of array) {
    updatedArray.push(callbackFunction(element));
  }
  return updatedArray;
};

module.exports = map;
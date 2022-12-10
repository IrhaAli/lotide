const map = function(array, callbackFunction) {
  // the array that contains the elements being gone through the callback function
  const mappedArray = [];
  // iterates through the array
  for (const element of array) {
    // uses the callback function and add them to the mappedArray
    mappedArray.push(callbackFunction(element));
  }
  return mappedArray;
};

module.exports = map;
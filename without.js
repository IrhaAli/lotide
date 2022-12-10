const without = function(array, itemsToRemove) {
  // result array to be returned
  const result = [];
  // iterates over the array and removes the specified in itemsToRemove
  for (let i = 0; i < array.length; i++) {
    // if the ith element is not in itemsToRemove
    if (!itemsToRemove.includes(array[i])) {
      result.push(array[i]);
    }
  }
  // returns the new array
  return result;
};

module.exports = without;
/**
 * Removes the specified items from an array.
 * @param {array} array the array to iterate over.
 * @param {array} itemsToRemove items to remove from the array.
 * @return {array} Returns a new array with the items from itemsToRemove being removed.
 */

const without = function(array, itemsToRemove) {
  // result array to be returned
  const result = [];
  // iterates over the array and add the items to result that are not in itemsToRemove
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
//Removes the specified items from an array
const without = function(array, itemsToRemove) {
  for (let i = 0; i < array.length; i++) {
    if (itemsToRemove.includes(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
};

module.exports = without;
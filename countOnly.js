/**
 * Counts the number of occurences in an array (allItems) of items denoted true in an object (itemsToCount).
 * @param {array} allItems an array of items.
 * @param {object} itemsToCount a key-value pair where key is the item from allItems and value is a boolean.
 * @return {object} key-value pairs where the key is the item denoted true in itemsToCount and value is the number of occurences of the key in allItems.
 */

const countOnly = function(allItems, itemsToCount) {
  // object that keeps a count for each item that needs to be counted (ie denoted true in itemsToCount)
  const totalItems = {};
  // iterate over all items in allItems
  for (const item of allItems) {
    // check if this item needs to be counted
    if (itemsToCount[`${item}`] === true) {
      // if so, add it to the totalItems
      if (totalItems[`${item}`] === undefined) {
        totalItems[`${item}`] = 1;
      } else {
        totalItems[`${item}`] += 1;
      }
    }
  }
  return totalItems;
};

module.exports = countOnly;
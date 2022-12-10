const countOnly = function(allItems, itemsToCount) {
  // object that keeps a count for each item that needs to be counted (ie denoted true in itemsToCount)
  // Note also that this will be returned
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
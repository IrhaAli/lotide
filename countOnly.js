const countOnly = function(allItems, itemsToCount) {
  let totalItems = {};
  for (const item of allItems) {
    if (itemsToCount[`${item}`] === true) {
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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let totalItems = {};
  for (const item in itemsToCount) {
    if (itemsToCount[`${item}`] === true) {
      totalItems[`${item}`] = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === `${item}`) {
          totalItems[`${item}`] += 1;
        }
      }
      if (totalItems[`${item}`] === 0) {
        totalItems[`${item}`] = undefined;
      }
    }
  }
  return totalItems;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
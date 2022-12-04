//Checks if the two primitive values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Counts the number of occurences in allItems of items denoted true in itemsToCount
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

//Test Code
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
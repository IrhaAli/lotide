//Checks if the two primitive values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Finds the first key that has the given value
const findKeyByValue = function(object, value) {
  for (const item in object) {
    if (object[`${item}`] === value) {
      return `${item}`;
    }
  }
  return undefined;
};

//Test Code
const bestTVShowsByGenre = {sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
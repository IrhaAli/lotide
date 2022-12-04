//Checks if the two arrays are equal
const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
  }
  return true;
};
//Consoles the approriate message based on the actual and expected arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Removes the specified items from an array
const without = function(array, itemsToRemove) {
  //use .includes to get rid off the outside for loop
  for (let i = 0; i < array.length; i++) {
    if (itemsToRemove.includes(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
};

//Test Code
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
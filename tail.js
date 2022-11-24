//Checks if the two primitive values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Returns the tail (ie. all but the first element) of the array
const tail = function(array) {
  return array.slice(1);
};

//Test Code
let actual = tail([5,6,7]);
assertEqual(actual.length, 2);
assertEqual(actual[0], 6);
assertEqual(actual[1], 7);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([5]), []);
assertEqual(tail([]), []);
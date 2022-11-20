const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};
//This looks like a brute force method
let actual = tail([5,6,7]);

assertEqual(actual.length, 2);
assertEqual(actual[0], 6);
assertEqual(actual[1], 7);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([5]), []);
assertEqual(tail([]), []);
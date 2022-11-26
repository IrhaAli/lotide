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

//Finds the indices of each unique letter found in the phrase
const letterPositions = function(sentence) {
  let noSpaceCapsPhrase = sentence.toLowerCase().split("");
  let totalPositions = {};
  for (let i = 0; i < noSpaceCapsPhrase.length; i++) {
    if ((/[a-z]/).test(noSpaceCapsPhrase[i])) {
      if (totalPositions[noSpaceCapsPhrase[i]] === undefined) {
        totalPositions[noSpaceCapsPhrase[i]] = [i];
      } else {
          totalPositions[noSpaceCapsPhrase[i]].push(i);
      }
        }
      }
  return totalPositions;
};

//Test Code
console.log(letterPositions("lighthouse in the house"));
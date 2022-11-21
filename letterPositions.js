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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  let noSpaceCapsPhrase = sentence.toLowerCase().split("");
  let totalPositions = {};
  for (let i = 0; i < noSpaceCapsPhrase.length; i++) {
    if (totalPositions[noSpaceCapsPhrase[i]] === undefined) {
      totalPositions[noSpaceCapsPhrase[i]] = [i];
      for (let j = i + 1; j < noSpaceCapsPhrase.length; j++) {
        if (noSpaceCapsPhrase[j] === noSpaceCapsPhrase[i]) {
          totalPositions[noSpaceCapsPhrase[i]].push(j);
        }
      }
    }
  }
  delete totalPositions[" "];
  return totalPositions;
};

console.log(letterPositions("lighthouse in the house"));
//Checks if the two primitive values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Counts the number of each letter that occurs in the phrase
const countLetters = function(phrase) {
  let noSpaceCapsPhrase = phrase.toLowerCase().replaceAll(" ", "").split("");
  let totalCount = {};
  for (const letter of noSpaceCapsPhrase) {
    if ((/[a-z]/).test(letter)) {
      if (totalCount[letter] === undefined) {
        totalCount[letter] = 1;
      } else {
        totalCount[letter] += 1;
      }
    }
  }
  return totalCount;
};

//Test Code
console.log(countLetters("Lighthouse in the house"));
console.log(countLetters("Hello, My name is Jamal. Every sixty seconds in Africa, a minute passes. Together we can stop this. Please, spread the word. Thank you was watching."));
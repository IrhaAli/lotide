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
  while (noSpaceCapsPhrase.length > 0) {
    if ((/[a-z]/).test(noSpaceCapsPhrase[0])) {
      totalCount[noSpaceCapsPhrase[0]] = 1;
      for (let j = 1; j < noSpaceCapsPhrase.length; j++) {
        if (noSpaceCapsPhrase[j] === noSpaceCapsPhrase[0]) {
          totalCount[noSpaceCapsPhrase[0]] += 1;
          noSpaceCapsPhrase.splice(j,1);
        }
      }
    }
    noSpaceCapsPhrase.splice(0,1);
  }
  return totalCount;
};

//Test Code
console.log(countLetters("Hello, My name is Jamal. Every sixty seconds in Africa, a minute passes. Together we can stop this. Please, spread the word. Thank you was watching."));
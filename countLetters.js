const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(phrase) {
  let noSpaceCapsPhrase = phrase.toLowerCase().replace(" ", "").split("");
  let totalCount = {};
  let i = 0;
  while (noSpaceCapsPhrase.length > 0) {
    totalCount[noSpaceCapsPhrase[0]] = 1;
    for (let j = 0; j < noSpaceCapsPhrase.length; j++) {
      if (noSpaceCapsPhrase[j] === totalCount[noSpaceCapsPhrase[0]]){
        totalCount[noSpaceCapsPhrase[0]] += 1;
        noSpaceCapsPhrase.splice(j,1);
      }
    }
    noSpaceCapsPhrase.splice(0,1);
    i++;
  }
  return totalCount;
};
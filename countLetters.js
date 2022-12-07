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

module.exports = countLetters;
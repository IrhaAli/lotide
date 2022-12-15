/**
 * Counts the number of times each letter occurs in the given phrase.
 * @param {phrase} phrase the given phrase.
 * @return {object} key-value pairs where the key is the letter and the value is the count.
 */

const countLetters = function(phrase) {
  // new version of the phrase with no space or capital letters as they are irrelevant to the phrase
  const noSpaceCapsPhrase = phrase.toLowerCase().replaceAll(" ", "");
  // object that keeps track of the number of letters in the phrase (this will be returned)
  const totalCount = {};
  // iterate through each letter of the phrase
  for (const letter of noSpaceCapsPhrase) {
    if ((/[a-z]/).test(letter)) {
      // increase the value of the appropriate letter, in totalCount
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
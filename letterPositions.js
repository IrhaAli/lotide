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

module.exports = letterPositions;
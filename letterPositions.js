const letterPositions = function(sentence) {
  let noCapsPhrase = sentence.toLowerCase();
  let totalPositions = {};
  for (let i = 0; i < noCapsPhrase.length; i++) {
    if ((/[a-z]/).test(noCapsPhrase[i])) {
      if (totalPositions[noCapsPhrase[i]] === undefined) {
        totalPositions[noCapsPhrase[i]] = [i];
      } else {
        totalPositions[noCapsPhrase[i]].push(i);
      }
    }
  }
  return totalPositions;
};

module.exports = letterPositions;
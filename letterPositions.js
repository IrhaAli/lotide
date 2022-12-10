const letterPositions = function(sentence) {
  // takes the lowercase version of the sentence
  const noCapsPhrase = sentence.toLowerCase();
  // tallies the letters and thier positions in the sentence, for each letter
  const totalPositions = {};
  // iterate through each element of the sentence (space included)
  for (let i = 0; i < noCapsPhrase.length; i++) {
    // only considers the alphabets of the sentence string
    if ((/[a-z]/).test(noCapsPhrase[i])) {
      // if the letter is not in totalPositions, adds it as a key
      if (totalPositions[noCapsPhrase[i]] === undefined) {
        totalPositions[noCapsPhrase[i]] = [i];
      // if it is then adds to the array of positions
      } else {
        totalPositions[noCapsPhrase[i]].push(i);
      }
    }
  }
  return totalPositions;
};

module.exports = letterPositions;
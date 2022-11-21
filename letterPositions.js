const letterPositions = function(sentence) {
  let noSpaceCapsPhrase = sentence.toLowerCase().replaceAll(" ", "").split("");
  let totalPositions = {};
  let i = 0;
  for (let i = 0; i < noSpaceCapsPhrase.length; i++) {
    if (totalPositions[noSpaceCapsPhrase[i]] === undefined){
      totalPositions[noSpaceCapsPhrase[i]] = [i];
      for (let j = i+1; j < noSpaceCapsPhrase.length; j++) {
        if (noSpaceCapsPhrase[j] === noSpaceCapsPhrase[i]){
          totalPositions[noSpaceCapsPhrase[i]].push(j);
        }
      }
    }
  }
  return totalPositions;
};

console.log(letterPositions("lighthouse in the house"));
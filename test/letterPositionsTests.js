const assert = require('chai').assert;
const lotide = require('../index');

describe("#letterPosition", () => {
  it("determines the indices of each letter in 'lighthouse in the house'", () => {
    const letterPositions = {'l': [ 0 ], 'i': [ 1, 11 ], 'g': [ 2 ], 'h': [ 3, 5, 15, 18 ], 't': [ 4, 14 ], 'o': [ 6, 19 ], 'u': [ 7, 20 ], 's': [ 8, 21 ], 'e': [ 9, 16, 22 ], 'n': [ 12 ]}
    assert.isTrue(lotide.eqObjects(lotide.letterPositions("lighthouse in the house"), letterPositions))
  });
});
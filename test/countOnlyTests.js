const assert = require('chai').assert;
const lotide = require('../index');

describe("#countOnly", () => {
  it("counts the number of occurences (or undefined) of names listed (not listed) in the array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.isTrue(lotide.eqObjects(lotide.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {"Fang": 2, "Jason": 2}))
  });
});
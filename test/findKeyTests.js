const assert = require('chai').assert;
const lotide = require('../index');

describe("#findKey", () => {
  const starPeople = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  it("returns valid for object that has key with 2 stars", () => {
    assert.equal(lotide.findKey(starPeople, x => x.stars === 2), "noma");
  });
  it("returns undefined for object that has no key with 20 stars", () => {
    assert.equal(lotide.findKey(starPeople, x => x.stars === 20), undefined);
  });
});
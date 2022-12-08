const assert = require('chai').assert;
const lotide = require('../index');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire"};
  it("returns 'drama' genre for TV show The Wire", () => {
    assert.equal(lotide.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for TV show not in the list", () => {
    assert.equal(lotide.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
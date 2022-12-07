const lotide = require('../index');
const assert = require('chai').assert;

describe("#map", () => {
  it("returns ['g','c','t','m','t'] for ['ground', 'control', 'to', 'major', 'tom'] looking at the first letter", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(lotide.map(words, word => word[0]), ['g','c','t','m','t']);
})});
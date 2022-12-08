const assert = require('chai').assert;
const lotide = require('../index');

describe("#eqArrays", () => {
  const a = [1, 2, 3];
  const b = [3, 2, 1];
  const c = ["1", "2", "3"];
  const d = ["1", "2", 3];
  const e = [[2, 3], [4]];
  const f = [[2, 3], [4, 5]];
  const g = [[2, 3], 4];
  it("returns true for same array of numbers", () => {
    assert.equal(lotide.eqArrays(a, a), true);
  });
  it("returns false for different array of numbers", () => {
    assert.equal(lotide.eqArrays(a, b), false);
  });
  it("returns true same array of strings", () => {
    assert.equal(lotide.eqArrays(c, c), true);
  });
  it("returns false for different array of numbers and strings", () => {
    assert.equal(lotide.eqArrays(c, d), false);
  });
  it("returns true for same array of arrays of numbers", () => {
    assert.equal(lotide.eqArrays(e, e), true);
  });
  it("returns false for different array of arrays of number with different array length", () => {
    assert.equal(lotide.eqArrays(e, f), false);
  });
  it("returns false for different array of numbers with arrays and primitves as elements", () => {
    assert.equal(lotide.eqArrays(f, g), false);
  });
});
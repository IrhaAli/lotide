const assert = require('chai').assert;
const lotide = require('../index');

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  it("returns true for 2 equal objects with values only being primitive", () => {
    assert.equal(lotide.eqObjects(ab, ba), true);
  });
  it("returns false for 2 objects with different number of keys", () => {
    assert.equal(lotide.eqObjects(ab, abc), false);
  });
  it("returns true for 2 equal objects with values being objects (arrays)", () => {
    assert.equal(lotide.eqObjects(cd, dc), true);
  });
  it("returns false for 2 objects with values being objects (arrays)", () => {
    assert.equal(lotide.eqObjects(cd, cd2), false);
  });
  it("returns true for 2 equal nested objects", () => {
    assert.equal(lotide.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("returns false for 2 objects with different number of keys for one of the object value", () => {
    assert.equal(lotide.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("returns false for 2 objects with different values for same key", () => {
    assert.equal(lotide.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});
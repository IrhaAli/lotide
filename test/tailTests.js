const lotide = require('../index');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [5,6] for [5,6,7]", () => {
    assert.deepEqual(lotide.tail([5,6,7]), [6,7]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(lotide.tail([]), []); 
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(lotide.tail([5]), []); 
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(lotide.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });
});
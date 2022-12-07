const lotide = require('../index');
const assert = require('chai').assert;

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3] without [1]", () => {
    assert.deepEqual(lotide.without([1, 2, 3], [1]), [2, 3]); 
  });
  it("returns ['1', '2'] for ['1', '2', '3'] without [1, 2, '3']", () => {
    assert.deepEqual(lotide.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
  });
});
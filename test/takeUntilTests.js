const lotide = require('../index');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it("returns [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] until the element is a negative value", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = lotide.takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });
  it("returns [ 'I've', 'been', 'to', 'Hollywood' ] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] until , has been found", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = lotide.takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
  });
});
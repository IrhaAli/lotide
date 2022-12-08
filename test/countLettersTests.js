const assert = require('chai').assert;
const lotide = require('../index');

describe("#countLetters", () => {
  it("counts the number of occurences each alphabet in 'Lighthouse in the house'", () => {
    let phrase = "Lighthouse in the house";
    assert.isTrue(lotide.eqObjects(lotide.countLetters(phrase), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }));
  });
  it("counts the number of occurences each alphabet in 'Hello, My name is Jamal. Every sixty seconds in Africa, a minute passes. Together we can stop this. Please, spread the word. Thank you was watching.'", () => {
    let phrase = "Hello, My name is Jamal. Every sixty seconds in Africa, a minute passes. Together we can stop this. Please, spread the word. Thank you was watching.";
    assert.isTrue(lotide.eqObjects(lotide.countLetters(phrase), {h: 6, e: 14, l: 4, o: 6, m: 4, y: 4, n: 7, a: 13, i: 7, s: 12, j: 1, v: 1, r: 5, x: 1, t: 9, c: 4, d: 3, f: 1, u: 2, p: 4, g: 2, w: 4, k: 1}));
  });
});
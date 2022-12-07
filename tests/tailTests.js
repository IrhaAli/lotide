const tail = require('../methods/tail');
const assertArraysEqual = require('../methods/assertArraysEqual');

let actual = tail([5,6,7]);
assertArraysEqual(actual.length, 2);
assertArraysEqual(actual[0], 6);
assertArraysEqual(actual[1], 7);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([5]), []);
assertArraysEqual(tail([]), []);
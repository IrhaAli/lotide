const flatten = require('../methods/flatten');
const assertArraysEqual = require('../methods/assertArraysEqual');

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
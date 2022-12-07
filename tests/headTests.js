const assertEqual = require('../methods/assertEqual');
const head = require('../methods/head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
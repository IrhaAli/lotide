const lotide = require('../index');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = lotide.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

lotide.assertEqual(result1["Jason"], 1);
lotide.assertEqual(result1["Karima"], undefined);
lotide.assertEqual(result1["Fang"], 2);
lotide.assertEqual(result1["Agouhanna"], undefined);
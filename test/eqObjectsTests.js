const lotide = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
lotide.assertEqual(lotide.eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
lotide.assertEqual(lotide.eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
lotide.assertEqual(lotide.eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
lotide.assertEqual(lotide.eqObjects(cd, cd2), false);

lotide.assertEqual(lotide.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

lotide.assertEqual(lotide.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
lotide.assertEqual(lotide.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
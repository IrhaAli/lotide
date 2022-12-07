const lotide = require('../index');

lotide.assertEqual(lotide.eqArrays([1, 2, 3], [1, 2, 3]), true);
lotide.assertEqual(lotide.eqArrays([1, 2, 3], [3, 2, 1]), false);

lotide.assertEqual(lotide.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
lotide.assertEqual(lotide.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

lotide.assertEqual(lotide.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);

lotide.assertEqual(lotide.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
lotide.assertEqual(lotide.eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
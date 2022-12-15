/**
 * Returns the tail (ie. all but the first element) of the array.
 * @param {array} array
 * @return {array} all but the first element(s) of the array.
 */

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
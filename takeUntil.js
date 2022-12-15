/**
 * Returns items of an array until the callback function is satisfied.
 * @param {array} array the array to iterate over.
 * @param {function} callback the function called per iteration.
 * @return {array} returns the kth item of the array such that the (k+1)-item returns true for the callback function.
 */

const takeUntil = function(array, callback) {
  // the array to be returned that will take in elements until the callback returns true
  const result = [];
  // iterate through the array
  for (const item of array) {
    // either adds the element to the result array if the callback returns false or returns the array
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  // returns the array when callback doesn't return true for any element
  return result;
};

module.exports = takeUntil;

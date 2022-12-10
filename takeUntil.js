const takeUntil = function(array, callback) {
  // the array to be returned that will take in elements until the callback returns true
  const result = [];
  // iterate through the array
  for (const item of array) {
    // adds the element to the result array if the callback returns false
    if (!callback(item)) {
      result.push(item);
    // returns the array when the callback returns true
    } else {
      return result;
    }
  }
  // returns the array when callback doesn't return true for any element
  return result;
};

module.exports = takeUntil;

/**
 * Finds the first key that has the given value.
 * @param {object} object the object to search.
 * @param {value} value the value to check against.
 * @return {string} the first key that has the value being looked for.
 */

const findKeyByValue = function(object, value) {
  // iterate through object
  for (const item in object) {
    // checks if the value of the key is the one the user is looking for in which case it returns the key
    if (object[item] === value) {
      return item;
    }
  }
  // returns undefined if no such key is found
  return undefined;
};

module.exports = findKeyByValue;
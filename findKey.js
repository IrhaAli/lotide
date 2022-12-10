const findKey = function(object, callback) {
  // iterate through object
  for (const item in object) {
    // check if callback returns true in which case it returns the first key for which the callback returns true
    if (callback(object[item])) {
      return item;
    }
  }
  // undefined if no such key exists
  return undefined;
};

module.exports = findKey;
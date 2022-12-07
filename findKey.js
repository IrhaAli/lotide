//Finds the first key that satistfies the callback function
const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[`${item}`])) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;
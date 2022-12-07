//Finds the first key that has the given value
const findKeyByValue = function(object, value) {
  for (const item in object) {
    if (object[`${item}`] === value) {
      return `${item}`;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
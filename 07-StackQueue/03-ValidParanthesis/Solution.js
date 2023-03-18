/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 == 1) {
    return false;
  }
  let stack = [];
  let braceMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  let valid = true;
  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (braceMap.has(item)) {
      stack.push(item);
    } else {
      let topItem = stack.pop();
      if (item !== braceMap.get(topItem)) {
        valid = false;
        break;
      }
    }
  }
  return valid && stack.length === 0;
};

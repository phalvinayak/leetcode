/**
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let arrLen = height.length;
  let maxLeft = new Array(arrLen).fill(0);
  let maxRight = new Array(arrLen).fill(0);
  let maxLeftVal = 0;
  let maxRightVal = 0;
  let i = 1;
  let j = arrLen - 2;
  while (i < arrLen && j >= 0) {
    maxLeftVal = Math.max(maxLeftVal, height[i - 1]);
    maxLeft[i] = maxLeftVal;

    maxRightVal = Math.max(maxRightVal, height[j + 1]);
    maxRight[j] = maxRightVal;
    i++;
    j--;
  }

  // Calculate the capacity based on the previous max height
  let storage = 0;
  for (let i = 1; i < arrLen - 1; i++) {
    let unit = Math.min(maxRight[i], maxLeft[i]) - height[i];
    storage += unit > 0 ? unit : 0;
  }
  return storage;
};

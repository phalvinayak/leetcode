/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let smartMap = {};
  for (let i = 0; i < nums.length; i++) {
    let targetNum = target - nums[i];
    if (smartMap[nums[i]] !== undefined) {
      return [smartMap[nums[i]], i];
    } else {
      smartMap[targetNum] = i;
    }
  }
  return [];
};

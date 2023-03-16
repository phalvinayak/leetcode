/**
 * https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let freq = new Array(3).fill(0);
  //1. Building frequency
  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]]++;
  }

  let counter = 0;
  for (let i = 0; i < freq.length; i++) {
    while (freq[i] > 0) {
      nums[counter++] = i;
      freq[i]--;
    }
  }
};

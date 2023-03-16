/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // Solving this problem using the quick select method.
  // In a given arr, if we sort kth largest element position will be
  // nums.length - k eg. [1,2,3,4,5] 2nd larges pos 3rd = (5-2) = 3
  let targetIndex = nums.length - k;
  let index = quickSelect(nums, 0, nums.length - 1, targetIndex);
  return nums[index];
};

function quickSelect(arr, low, high, targetIndex) {
  while (low < high) {
    i = partition(arr, low, high);
    if (i === targetIndex) {
      return i;
    }
    if (i > targetIndex) {
      high = i - 1;
    } else {
      low = i + 1;
    }
  }
  return low;
}

function partition(arr, low, pivot) {
  let i = low;
  let j = pivot - 1;
  while (i <= j) {
    if (arr[i] < arr[pivot]) {
      i++;
    } else if (arr[j] >= arr[pivot]) {
      j--;
    } else {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  swap(arr, i, pivot);
  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

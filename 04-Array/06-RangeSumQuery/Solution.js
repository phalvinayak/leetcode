/**
 * @param {number[]} nums
 */
let st;

const NumArray = function (nums) {
  let n = nums.length;
  // st = new Array(4 * n); // OR 2**Math.ceil(Math.log2(n) + 1)
  st = new Array(2 ** Math.ceil(Math.log2(n) + 1)); // OR simply 4*n
  let stIndex = 1;
  let start = 0;
  let end = n - 1;

  // Preprocess
  buildSegTree(stIndex, nums, start, end);
  console.log(nums);
  console.log(st);
  console.log(query(0, 2, stIndex, start, end));
  console.log(query(2, 5, stIndex, start, end));
  console.log(query(0, 5, stIndex, start, end));

  // console.log("Update Operation");
  // console.log(nums);
  // console.log(st);
  // nums[2] = 100;
  // update(stIndex, start, end, 2, 100);
  // console.log(query(2, 4, stIndex, start, end));
  // console.log(query(1, 4, stIndex, start, end));
  // console.log(query(2, 2, stIndex, start, end));
  // console.log(query(0, 5, stIndex, start, end));
};

function buildSegTree(stIndex, nums, start, end) {
  if (start > end) return;
  if (start === end) {
    // Leafnode case
    st[stIndex] = nums[start];
    return;
  }

  // InternalNode
  let mid = start + Math.floor((end - start) / 2);
  buildSegTree(2 * stIndex, nums, start, mid);
  buildSegTree(2 * stIndex + 1, nums, mid + 1, end);
  st[stIndex] = merge(st[2 * stIndex], st[2 * stIndex + 1]);
}

function query(qs, qe, stIndex, start, end) {
  if (qs > end || qe < start) return 0; // No Overlap
  if (start >= qs && end <= qe) return st[stIndex]; // Total Overlap

  // Partial Overlap
  let mid = start + Math.floor((end - start) / 2);
  let leftTreeResult = query(qs, qe, 2 * stIndex, start, mid);
  let rightTreeResult = query(qs, qe, 2 * stIndex + 1, mid + 1, end);
  return merge(leftTreeResult, rightTreeResult);
}

function update(stIndex, start, end, pos, newValue) {
  if (start > pos || end < pos) return; // No Overlap
  if (start === end) {
    st[stIndex] = newValue;
    return;
  }

  // For internal node case
  let mid = start + Math.floor((end - start) / 2);
  update(2 * stIndex, start, mid, pos, newValue);
  update(2 * stIndex + 1, mid + 1, end, pos, newValue);
  st[stIndex] = merge(st[2 * stIndex], st[2 * stIndex + 1]);
}

function merge(node1, node2) {
  // Merging logic can be chaned based on the requirement
  return node1 + node2;
}

NumArray([-2, 0, 3, -5, 2, -1]);

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

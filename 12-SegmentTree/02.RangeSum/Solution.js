let st;
/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  let n = nums.length;
  // st = new Array(4 * n); // OR 2**Math.ceil(Math.log2(n) + 1)
  st = new Array(2 ** Math.ceil(Math.log2(n) + 1)); // OR simply 4*n
  this.stIndex = 1;
  this.start = 0;
  this.end = n - 1;
  // Preprocess
  buildSegTree(this.stIndex, nums, this.start, this.end);
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

function merge(node1, node2) {
  // Merging logic can be chaned based on the requirement
  return node1 + node2;
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return query(left, right, this.stIndex, this.start, this.end);
};

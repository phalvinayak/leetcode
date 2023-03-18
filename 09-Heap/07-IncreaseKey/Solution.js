/**
 * Increase Key
 * Steps
 * 1. Update the value
 * 2. Percolate Up, Assumption x is +ve
 * @param {Array} heap Array representaion of Heap
 * @param {number} i index of the number to increase
 * @param {number} x amount to be increased
 */
function increaseKey(heap, i, x) {
  if (x < 0) {
    console.error("Wrong Operation");
    return;
  }
  heap[i] += x;
  while (i > 1 && heap[i] < heap[Math.floor(i / 2)]) {
    swap(heap, i, Math.floor(i / 2));
    i = Math.floor(i / 2);
  }
  // Total Time complexcity O(log N)
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

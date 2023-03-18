/**
 * Decrease Key
 * Steps
 * 1. Update the value
 * 2. Percolate Down, Assumption x is +ve and we are deducting it from the number
 * @param {Array} heap Array representaion of Heap
 * @param {number} i index of the number to increase
 * @param {number} x amount to be increased
 */
function increaseKey(heap, i, x) {
  if (x < 0) {
    console.error("Wrong Operation");
    return;
  }
  heap[i] -= x;
  maxHeapify(heap, i, heap.size());
  // Total Time complexcity O(log N)
}

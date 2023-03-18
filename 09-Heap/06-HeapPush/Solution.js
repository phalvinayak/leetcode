/**
 * Heap Push / Heap Insert
 * 1. There should be an empty space, append at the end O(1)
 * 2. Perform Percolate Up
 * @param {Array} heap Heap as a Array
 * @param {number} value element to be inserted
 */
function heapPush(heap, value) {
  // Check for heap overflow, we can check if heap size is fixed
  heap.heapSize++; // Increase the heap size
  heap[heap.heapSize] = value;
  let i = heap.heapSize;
  while (i > 1 && heap[Math.floor(i / 2)] < heap[i]) {
    swap(heap[i], heap[Math.floor(i / 2)]);
    i = Math.floor(i / 2);
  }
  // Total Time complexcity O(log N)
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

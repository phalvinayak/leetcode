/**
 * In a given array all the leaf nodes are already heap
 * We can start from n/2 element to heapify to build a heap
 * @param {Array} heap Array as a heap
 */
function buildHeap(heap) {
  // Can be start from the last node
  // Usually internal node are represented from 1-n/2
  for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
    // Calling maxHeapify or minHeapify based on the requirement
    maxHeapify(heap, i, heap.length);
  }
  // Total Time complexity will be O(N)
}

function main(arr) {
  console.log("Before Building Heap: ", arr);
  buildHeap(arr);
  console.log("After Building Heap: ", arr);
}

main([5, 2, 3, 1, 5, 1, 1, 2, 0, 0]);

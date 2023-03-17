/**
 * Heap Pop / Extract Max / Extract Min
 * Steps to perform
 * 1. Swap root element with the last(nth element) O(1)
 * 2. Save the root element
 * 3. Reduce the size of the Heap
 * 4. Return the poped element
 * If you want to peak, simply return the root element no need to save
 * @param {Array} heap Array as a heap
 */

function heapPop(heap) {
  if (heap.size() < 1) {
    console.error("Heap Underflow");
    return -1;
  }
  let root = heap[1]; // Root element
  swap(heap, 1, heap.size());
  heap.size() - 1;
  maxHeapify(heap, 1); // Can be minHeapify based on use case.
  return root;
}

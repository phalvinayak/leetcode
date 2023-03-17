// Left right pointer based on array index starting wtih 1 as a convinience
// With this understanding parent element will be Math.floor(i/2)

/**
 * MinHeapify Utility function TC O(log n)
 * @param {Array} heap Array as a heap
 * @param {number} curr Current node, passed as a index of the element
 * @param {number} size Total Size of the heap
 */
function minHeapify(heap, curr, size) {
  let smallest = curr; // Assumption as largest element
  let l = 2 * curr; // Left child index from the curr position
  let r = 2 * curr + 1; // Right child index from the current position
  // Check if left child is smaller than the smallest (current)
  if (l < size && heap[l] < heap[smallest]) {
    smallest = l; // If true change the smallest to left child
  }
  // Check if right child is smaller than the smallest
  if (r < size && heap[r] < heap[smallest]) {
    smallest = r; // If true change the smallest to right child
  }
  // If current item is not smallest
  if (curr !== smallest) {
    swap(heap, curr, smallest); // Swap the current element with smallest one
    heapify(heap, smallest, size); // Heapify the heap from the smallest element
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

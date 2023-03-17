// Left right pointer based on array index starting wtih 1 as a convinience
// With this understanding parent element will be Math.floor(i/2)

/**
 * MaxHeapify Utility function TC O(log n)
 * @param {Array} heap Array as a heap
 * @param {number} curr Current node, passed as a index of the element
 * @param {number} size Total Size of the heap
 */
function maxHeapify(heap, curr, size) {
  let largest = curr; // Assumption as largest element
  let l = 2 * curr; // Left child index from the curr position
  let r = 2 * curr + 1; // Right child index from the current position
  // Check if left child is greater than the largest (current)
  if (l < size && heap[l] > heap[largest]) {
    largest = l; // If true change the largest to left child
  }
  // Check if right child is greater than the largest
  if (r < size && heap[r] > heap[largest]) {
    largest = r; // If true change the largest to right child
  }
  // If current item is not largest
  if (curr !== largest) {
    swap(heap, curr, largest); // Swap the current element with largest one
    heapify(heap, largest, size); // Heapify the heap from the largest element
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

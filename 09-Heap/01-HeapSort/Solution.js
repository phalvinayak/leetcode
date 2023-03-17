function heapSort(heap) {
  // Build Heap, starting with n/2 elements, as after that all are leaf nodes
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
    heapify(heap, i, heap.length);
  }

  // Sort using the heap
  // 1. Move the root to end of heap.
  // 2. reduce the heap size by one and heapify from root
  for (let i = heap.length - 1; i > 0; i--) {
    swap(heap, 0, i);
    heapify(heap, 0, i);
  }
}

function heapify(heap, curr, size) {
  let largest = curr;
  let l = 2 * curr + 1;
  let r = l + 1;
  if (l < size && heap[l] > heap[largest]) {
    largest = l;
  }
  if (r < size && heap[r] > heap[largest]) {
    largest = r;
  }
  if (curr !== largest) {
    swap(heap, curr, largest);
    heapify(heap, largest, size);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sort(arr) {
  console.log("Before Sorting: ", arr);
  heapSort(arr);
  console.log("Sorted Array: ", arr);
}

sort([5, 2, 3, 1, 5, 1, 1, 2, 0, 0]);

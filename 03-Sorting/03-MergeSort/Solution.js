function mergeSort(arr, low, high) {
  if (low < high) {
    // Find mid point, and divide the array into 2 until it becomes single unit
    // Merge the sorted array together to create a single array
    let mid = low + Math.floor((high - low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

function merge(arr, low, mid, high) {
  let cache = new Array(high - low + 1);
  let index = 0;
  let i = low;
  let j = mid + 1;
  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      cache[index++] = arr[i++];
    } else {
      cache[index++] = arr[j++];
    }
  }
  while (i <= mid) {
    cache[index++] = arr[i++];
  }
  while (j <= high) {
    cache[index++] = arr[j++];
  }
  cache.forEach((x, i) => {
    arr[low + i] = x;
  });
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sort(arr) {
  console.log("Before Sorting: ", arr);
  mergeSort(arr, 0, arr.length - 1);
  console.log("Sorted Array: ", arr);
}

sort([5, 2, 3, 1, 5, 1, 1, 2, 0, 0]);

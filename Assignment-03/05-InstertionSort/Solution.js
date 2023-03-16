function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j] < arr[j - 1] && j > 0) {
      swap(arr, j, j - 1);
      j--;
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sort(arr) {
  console.log("Before Sorting: ", arr);
  insertionSort(arr);
  console.log("Sorted Array: ", arr);
}

sort([5, 2, 3, 1, 5, 1, 1, 2, 0, 0]);

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sort(arr) {
  console.log("Before Sorting: ", arr);
  bubbleSort(arr);
  console.log("Sorted Array: ", arr);
}

sort([5, 2, 3, 1, 5, 1, 1, 2, 0, 0]);

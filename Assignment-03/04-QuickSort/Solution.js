function quickSort(arr, low, high) {
  if (low < high) {
    let i = partition(arr, low, high);
    quickSort(arr, low, i - 1);
    quickSort(arr, i + 1, high);
  }
}

function partition(arr, low, pivot) {
  let i = low;
  let j = pivot - 1;
  while (i <= j) {
    if (arr[i] < arr[pivot]) {
      i++;
    } else if (arr[j] >= arr[pivot]) {
      j--;
    } else {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  swap(arr, i, pivot);
  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sort(arr) {
  console.log("Before Sorting: ", arr);
  quickSort(arr, 0, arr.length - 1);
  console.log("Sorted Array: ", arr);
}

sort([5, 2, 3, 1, 5, 1, 1, 2, 0, 0]);

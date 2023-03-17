function merge2SortedArray(arr1, arr2) {
  for (let i = arr2.length; i >= 0; i--) {
    let last = arr1[arr1.length - 1];
    let j = arr1.length - 2;
    while (arr2[i] < arr1[j] && j >= 0) {
      swap(arr1, j, j + 1);
      j--;
    }
    if (j !== arr1.length - 2 || arr2[i] < last) {
      arr1[j + 1] = arr2[i];
      arr2[i] = last;
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let arr1 = [0, 5, 10, 15, 20, 25, 30, 35];
let arr2 = [4, 8, 16, 20, 24, 28, 32];
merge2SortedArray(arr1, arr2);
console.log(arr1, arr2);
// output
// [0,  4,  5,  8, 10, 15, 16, 20]
// [20, 24, 25, 28, 30, 32, 35]

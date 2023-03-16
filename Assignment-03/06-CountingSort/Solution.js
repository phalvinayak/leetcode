function countingSort(arr) {
  // Basically a range map, for digits 0-9 which is 10
  // For alphabets its a-z which is 26
  let freq = new Array(10).fill(0);
  // Step 1: Building freq
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]]++;
  }

  // Step 2: Counting cummulative frequency of the map array
  for (let i = 1; i < freq.length; i++) {
    freq[i] += freq[i - 1];
  }
  // console.log("Cumm Freq Arr", freq);

  // Step 3. Iterate over the original array and sort it
  let sortedArr = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr[freq[arr[i]] - 1] = arr[i];
    freq[arr[i]]--;
  }
  return sortedArr;
}

function sort(arr) {
  console.log("Before Sorting: ", arr);
  const sortedArr = countingSort(arr);
  console.log("Sorted Array: ", sortedArr);
}

sort([5, 2, 3, 1, 5, 1, 1, 2, 0, 0]);

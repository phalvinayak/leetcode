// Largest Sum Contiguous Subarray (Kadane’s Algorithm)

function largestSumOfSubArray(arr) {
  let largestSum = Number.MIN_VALUE;
  let maxSum = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    maxSum = maxSum + arr[i];
    if (maxSum > largestSum) {
      largestSum = maxSum;
      end = i;
    }
    if (maxSum < 0) {
      maxSum = 0;
      start = i + 1;
    }
  }
  console.log(
    `Largest sum is of continious sub array ${arr.slice(start, end + 1)}`
  );
  return largestSum;
}

console.log(largestSumOfSubArray([-2, -3, 4, -1, -2, 1, 5, -2]));

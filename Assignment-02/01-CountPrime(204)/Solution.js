/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) {
    return 0;
  }
  // Declaring array of flags as false
  let flags = new Uint8Array(n); //declares array and filled with 0
  // Iterating till sqrt of 2
  // Starting from 2 prime number, mark its all multiple to false
  // as those multiiples are not prime which is obvious.
  let count = n - 2; // Minus 2 to skip 0 and 1 index
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!flags[i]) {
      // Iterate only if flag is set to false
      // We are finding all the multiple of prime till the given number
      for (let j = i; i * j < n; j++) {
        if (!flags[i * j]) {
          count--; // Counting while marking for the first time.
        }
        flags[i * j] = 1;
      }
    }
  }
  return count;
};

console.log(countPrimes(20));

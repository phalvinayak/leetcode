/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // Declaring array of flags as true
  let flags = [...new Array(n)].map(() => true);
  // Iterating till sqrt of 2
  // Starting from 2 prime number, mark its all multiple to false
  // as those multiiples are not prime which is obvious.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (flags[i]) {
      // Iterate only if flag is set to true
      // We are finding all the multiple of prime till the given number
      for (let j = i; i * j <= n; j++) {
        flags[i * j] = false;
      }
    }
  }

  // Counting the flags which are true, by skipping the first 2 flags
  let count = 0;
  flags.forEach((m, i) => {
    if (i > 1 && m) {
      count++;
    }
  });
  return count;
};

console.log(countPrimes(10));

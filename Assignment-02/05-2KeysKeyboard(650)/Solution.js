/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  if (n == 1) {
    return 0;
  }
  if (n <= 4) {
    return n;
  }

  let maxSize = parseInt(Math.sqrt(n), 10);
  let opCounter = 0;
  let sieve = new Uint8Array(maxSize + 1); // will return array with all element as 0
  let temp = n; // Temporary number to hold intermediate division
  for (let i = 2; i <= maxSize; i++) {
    if (!sieve[i]) {
      for (let j = 2; i * j <= maxSize; j++) {
        sieve[i * j] = 1;
      }
      while (temp % i === 0) {
        temp /= i;
        opCounter += i;
      }
    }
  }
  if (temp > 1) {
    opCounter += temp;
  }
  return opCounter;
};

console.log(minSteps(21));

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

  let opCounter = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      n /= i;
      opCounter += i;
    }
  }
  if (n > 1) {
    opCounter += n;
  }
  return opCounter;
};

console.log(minSteps(12));

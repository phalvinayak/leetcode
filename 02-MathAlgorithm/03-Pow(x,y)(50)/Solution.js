/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      res *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return res;
};

console.log(myPow(2, -7).toString());

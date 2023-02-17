/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let cn = new Array(n + 1);
  cn[0] = 0; // dummy not used
  cn[1] = 1;
  cn[2] = 1;
  for (let i = 2; i <= n + 1; i++) {
    let res = 0;
    for (let j = 1; j < i; j++) {
      res += cn[j] * cn[i - j];
    }
    cn[i] = res;
  }
  return cn[n + 1];
};

console.log(numTrees(19));

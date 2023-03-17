/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let pascalTiangle = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || i == j) {
        row[j] = 1;
      } else {
        row[j] = pascalTiangle[i - 1][j - 1] + pascalTiangle[i - 1][j];
      }
    }
    pascalTiangle.push(row);
  }
  return pascalTiangle;
};

let pTriangle = generate(5);
for (const row of pTriangle) {
  console.log(row);
}

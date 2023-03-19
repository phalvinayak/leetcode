/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  let elements = [];
  let rowStart = 0,
    columnStart = 0,
    rowEnd = matrix.length - 1,
    columnEnd = matrix[0].length - 1;
  while (columnStart <= columnEnd && rowStart <= rowEnd) {
    // Printing row left to right - First Row
    for (let i = columnStart; i <= columnEnd; i++) {
      elements.push(matrix[rowStart][i]);
    }
    rowStart++;

    // Printing row top to bottom - Last Column
    for (let i = rowStart; i <= rowEnd; i++) {
      elements.push(matrix[i][columnEnd]);
    }
    columnEnd--;

    // Printing right to left - Bottom Row
    if (rowStart <= rowEnd) {
      for (let i = columnEnd; i >= columnStart; i--) {
        elements.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }

    // Printing bottom to top - First Column
    if (columnStart <= columnEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        elements.push(matrix[i][columnStart]);
      }
      columnStart++;
    }
  }

  return elements;
};

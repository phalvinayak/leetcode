/**
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let map = new Map();
  let m = board.length;
  for (let i = 0; i < m; i++) {
    // Validate row by duplicate check
    for (let j = 0; j < m; j++) {
      if (board[i][j] !== ".") {
        if (map.has(board[i][j])) {
          return false;
        }
        map.set(board[i][j], true);
      }
    }
    map.clear();

    // Validate column by duplicate check
    for (let j = 0; j < m; j++) {
      if (board[j][i] !== ".") {
        if (map.has(board[j][i])) {
          return false;
        }
        map.set(board[j][i], true);
      }
    }
    map.clear();

    // Validate 3x3 table for duplicates
    let tableRowStart = Math.floor(i / 3) * 3; // Generate row start index
    let tableColStart = (i % 3) * 3; // Generate column start index
    for (let j = tableRowStart; j <= tableRowStart + 2; j++) {
      for (let k = tableColStart; k <= tableColStart + 2; k++) {
        if (board[j][k] !== ".") {
          if (map.has(board[j][k])) {
            return false;
          }
          map.set(board[j][k], true);
        }
      }
    }
    map.clear();
  }
  return true;
};

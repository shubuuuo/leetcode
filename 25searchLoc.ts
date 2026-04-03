function searchMatrixYes(matrix: number[][], target: number): boolean {
  if (!matrix || matrix.length === 0 || !matrix) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    let current = matrix[row][col];

    if (current === target) {
      return true;
    } else if (current > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
}

function searchMatrix(matrix: number[][], target: number): number[] {
  if (!matrix || matrix.length === 0 || !matrix) return [0, 0];

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    let current = matrix[row][col];

    if (current === target) {
      return [row, col];
    } else if (current > target) {
      col--;
    } else {
      row++;
    }
  }
  return [-1, -1];
}

const matrixA = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 26;

console.log(searchMatrix(matrixA, target));
// TC -> O(N + M)
// SC -> O(1)

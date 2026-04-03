function searchMatrixMine(matrix: number[][], target: number): boolean {
  if (!matrix || matrix.length === 0 || !matrix) return false;
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  return false;
}

function searchMatrixBrute(matrix: number[][], target: number): boolean {
  if (!matrix || matrix.length === 0 || !matrix) return false;
  for (let i = 0; i < matrix.length; i++) {
    let low = 0;
    let high = matrix[0].length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (matrix[i][mid] === target) {
        return true;
      } else if (matrix[i][mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return false;
}

function searchMatrix(matrix: number[][], target: number): boolean {
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

const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(searchMatrixMine(mat, 8));
console.log(searchMatrixBrute(mat, 8));
console.log(searchMatrix(mat, 8));

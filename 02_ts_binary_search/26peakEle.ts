function findPeakGridWrong(mat: number[][]): number[] {
  if (!mat || mat.length === 0 || !mat) return [0, 0];

  let row = 0;
  let col = mat[0].length - 1;

  while (row < mat.length && col >= 0) {
    let current = mat[row][col];
    let prev = mat[row][col - 1];
    let next = mat[row + 1][col];

    if (current > prev && current > next) {
      return [row, col];
    } else if (current < prev) {
      col--;
    } else {
      row++;
    }
  }
  return [-1, -1];
}

function findPeakGrid(mat: number[][]): number[] {
  let startCol = 0;
  let endCol = mat[0].length - 1;

  while (startCol <= endCol) {
    let midCol = Math.floor((startCol + endCol) / 2);

    let maxRow = 0;
    for (let i = 0; i < mat.length; i++) {
      if (mat[i][midCol] > mat[maxRow][midCol]) {
        maxRow = i;
      }
    }

    let leftIsLarger =
      midCol > 0 && mat[maxRow][midCol - 1] > mat[maxRow][midCol];
    let rightIsLarger =
      midCol < mat[0].length - 1 &&
      mat[maxRow][midCol + 1] > mat[maxRow][midCol];

    if (!leftIsLarger && !rightIsLarger) {
      return [maxRow, midCol];
    } else if (leftIsLarger) {
      endCol = midCol - 1;
    } else {
      startCol = midCol + 1;
    }
  }
  return [-1, -1];
}

const matA = [
  [5, 10, 8],
  [4, 25, 7],
  [3, 9, 6],
];

const matB = [
  [1, 4],
  [3, 2],
];

const matC = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

console.log(findPeakGrid(matA));
console.log(findPeakGrid(matB));
console.log(findPeakGrid(matC));

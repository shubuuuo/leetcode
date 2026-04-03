// TC = O(m * n)
// SC = O(1)
function maxRowsBrute(mat: number[][]): number {
  let index = -1;
  let maxCnt = -1;
  let row = mat.length;
  let col = mat.length;

  for (let i = 0; i < row; i++) {
    let cntRow = 0;

    for (let j = 0; j < col; j++) {
      cntRow += mat[i][j];
    }

    if (cntRow > maxCnt) {
      maxCnt = cntRow;
      index = i;
    }
  }

  return index;
}

// TC = O(N * log2(M))
// SC = O(1)
function maxRowsOptimal(mat: number[][], n: number, m: number): number {
  let index = -1;
  let cntMax = 0;
  for (let i = 0; i < mat.length; i++) {
    let cntOnes = m - lowerBound(mat[i], m, 1);
    if (cntOnes > cntMax) {
      cntMax = cntOnes;
      index = i;
    }
  }

  return index;
}

function lowerBound(arr: number[], n: number, m: number): number {
  let low = 0;
  let high = n;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= m) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid - 1;
    }
  }

  return ans;
}

const matrix: number[][] = [
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
];

console.log(maxRowsBrute(matrix));
console.log(maxRowsOptimal(matrix, 3, 5));

// Own Appraoch
// Nah, This Code Sucks.
function AgressiveCowsBFO(arr: number[], n: number, k: number): number {
  let distOne: number[] = [];
  let distTwo: number[] = [];
  let num: number = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      distOne[i] = arr[i] - arr[j];
    }
    distTwo[i] = distOne[i];
    num = Math.max(...distTwo);
  }

  return num;
}

// In JS, we can just use Math.max(...arr) operator to find the maximum value in array.
function highestNum(dist: number[]): number {
  let highest = 0;
  for (let i = 0; i < dist.length; i++) {
    if (dist[i] > highest) {
      highest = dist[i];
    }
  }

  return highest;
}

// Watched a Video
function AgressiveCowsBruteVideo(arr: number[], n: number, k: number): number {
  arr.sort((a, b) => a - b);
  let maxDist: number = arr[n - 1] - arr[0];

  for (let dist = 0; dist <= maxDist; dist++) {
    if (CanWePlace(arr, dist, k)) {
      continue;
    } else {
      return dist - 1;
    }
  }

  return maxDist;
}

function CanWePlace(arr: number[], dist: number, k: number): boolean {
  let cntCows: number = 1;
  let lastCow: number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - lastCow >= dist) {
      cntCows++;
      lastCow = arr[i];
    }
  }
  return cntCows >= k;
}

function AgressiveCowsOptimizedVideo(
  arr: number[],
  n: number,
  k: number
): number {
  arr.sort((a, b) => a - b);

  let low: number = 1,
    high: number = arr[n - 1] - arr[0];

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);

    if (CanWePlace(arr, mid, k)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

console.log(AgressiveCowsBruteVideo([4, 2, 1, 3, 6], 5, 2));
console.log(AgressiveCowsBruteVideo([9, 0, 7, 10, 3, 4], 6, 4));
console.log(AgressiveCowsOptimizedVideo([4, 2, 1, 3, 6], 5, 2));
console.log(AgressiveCowsOptimizedVideo([9, 0, 7, 10, 3, 4], 6, 4));
// console.log(highestNum([4, 2, 1, 3, 6]));

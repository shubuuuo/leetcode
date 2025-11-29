function divisor(arr: number[], val: number): number {
  let div: number = 0;

  for (let i = 0; i < arr.length; i++) {
    div += Math.ceil(arr[i] / val);
  }

  return div;
}

function smallestDivisor(nums: number[], threshold: number): number {
  // Divisor cannot be 0, codw will crash and will return 0
  let low: number = 1;
  //   high should be max(nums), not nums.length
  let high: number = Math.max(...nums);
  let ans: number = high;

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);

    if (divisor(nums, mid) <= threshold) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function smallestDivisorBrute(nums: number[], threshold: number): number {
  for (let index = 1; index < Math.max(...nums); index++) {
    if (divisor(nums, index) <= threshold) {
      return index;
    }
  }
  return -1;
}

console.log(smallestDivisor([1, 2, 5, 9], 6));

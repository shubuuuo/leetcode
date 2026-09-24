// Problem Link - [https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/?envType=daily-question&envId=2026-09-24]
// Problem Title - 3550. Smallest Index With Digit Sum Equal to Index
// Topics: Mid Level, Array, Math, Weekly Contest 450
// Hint 1: Simulate as described

// Solution
function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    let sum = 0;

    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum === i) {
      return i;
    }
  }

  return -1;
}

console.log(smallestIndex([1, 3, 2]));

function smallestIndexString(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const digitSum = nums[i]
      .toString()
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);

    if (digitSum === i) {
      return i;
    }
  }

  return -1;
}

function getDigitSum(n: number): number {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function smallestIndexHelper(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (getDigitSum(nums[i]) === i) {
      return i;
    }
  }
  return -1;
}

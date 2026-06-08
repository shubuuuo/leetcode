// Problem Statement:

// Given an array of distinct integers and a target, you have to return the list of all unique combinations where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from the given array an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

function combAttempt(arr: number[], target: number): number {
  // Two pointer Approach -> i & j

  let totalSum = 0;
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      totalSum += j;
      if (totalSum === target) {
        result.push(totalSum);
      }
    }
  }
  return 1;
}
// Two pointer: Works on sorted arrays to find pairs/triplets with a target
// Sliding window: Works on contiguous subarrays/substrings
// This problem: Needs to find ALL possible combinations (not just count), and elements can be reused unlimited times



console.log(combBrute([2, 3, 6, 7], 7));

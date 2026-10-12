function maxSumWrong(nums: number[], k: number): number {
  let j = nums.length;
  let res: number[] = [];
  let finalres: number = 0;
  for (let i = 0; i < j; i++) {
    for (let l = 0; l < k; l++) {
      if (i === 0) {
        res = bitwisehelper(i, j, nums);
      } else {
        i = i + 2;
        res = bitwisehelper(i, j, nums);
      }
    }
  }

  for (let n = 0; n < res.length; n++) {
    res[n] = res[n] * res[n];
  }

  for (let o = 0; o < res.length; o++) {
    finalres += res[o];
  }

  return finalres;
}

function bitwisehelper(i: number, j: number, nums: number[]): number[] {
  let result: number[] = [];
  for (let m = 0; m < nums.length; m++) {
    result[m] = nums[m];
  }
  result[i] = nums[i] & nums[j];
  result[j] = nums[i] | nums[j];
  return result;
}

function maxSum(nums: number[], k: number): number {
  const MOD = 1_000_000_007n;
  const cnt: number[] = new Array(30).fill(0);

  for (const x of nums) {
    for (let b = 0; b < 30; b++) {
      if ((x >> b) & 1) cnt[b]++;
    }
  }

  let ans = 0n;
  for (let t = 0; t < k; t++) {
    let cur = 0;
    for (let b = 0; b < 30; b++) {
      if (cnt[b] > 0) {
        cur |= 1 << b;
        cnt[b]--;
      }
    }
    const v = BigInt(cur);
    ans = (ans + v * v) % MOD;
  }
  return Number(ans);
}

function maxSumBrute(nums: number[], k: number): number {
  const MOD = 1_000_000_007n;
  const start = [...nums].sort((a, b) => b - a);
  const seen = new Set<string>([start.join(",")]);
  const stack: number[][] = [start];
  let best = 0n;

  while (stack.length) {
    const arr = stack.pop()!;

    // arr is sorted descending, so the top k are the first k
    let s = 0n;
    for (let i = 0; i < k; i++) s += BigInt(arr[i]) * BigInt(arr[i]);
    if (s > best) best = s;

    // try every pair of indices
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const next = [...arr];
        next[i] = arr[i] & arr[j];
        next[j] = arr[i] | arr[j];
        next.sort((a, b) => b - a);
        const key = next.join(",");
        if (!seen.has(key)) {
          seen.add(key);
          stack.push(next);
        }
      }
    }
  }
  return Number(best % MOD);
}

console.log(maxSum([2, 6, 5, 8], 3));

/*
A1:
1. Start a iteration, to search.
2. Take two pointers on each side of an array.
3. Start anther iteration with the size of "k", for the size of k, take, i & j, and last operation and perform operation and make a new array and input that in the array.
4. Now, move the "i" to the next {i+2} which is not neighbouring element & compute bitwise operation again and rewrite that resultant array.
5. Now, add the resultant array by making all the elements squared.
6. return the final result.
*/

/*
2897. Apply Operations on Array to Maximize Sum of Squares
Hard
Topics
premium lock icon
Companies
Hint
You are given a 0-indexed integer array nums and a positive integer k.

You can do the following operation on the array any number of times:

Choose any two distinct indices i and j and simultaneously update the values of nums[i] to (nums[i] AND nums[j]) and nums[j] to (nums[i] OR nums[j]). Here, OR denotes the bitwise OR operation, and AND denotes the bitwise AND operation.
You have to choose k elements from the final array and calculate the sum of their squares.

Return the maximum sum of squares you can achieve.

Since the answer can be very large, return it modulo 109 + 7.

 

Example 1:

Input: nums = [2,6,5,8], k = 2
Output: 261
Explanation: We can do the following operations on the array:
- Choose i = 0 and j = 3, then change nums[0] to (2 AND 8) = 0 and nums[3] to (2 OR 8) = 10. The resulting array is nums = [0,6,5,10].
- Choose i = 2 and j = 3, then change nums[2] to (5 AND 10) = 0 and nums[3] to (5 OR 10) = 15. The resulting array is nums = [0,6,0,15].
We can choose the elements 15 and 6 from the final array. The sum of squares is 152 + 62 = 261.
It can be shown that this is the maximum value we can get.
Example 2:

Input: nums = [4,5,4,7], k = 3
Output: 90
Explanation: We do not need to apply any operations.
We can choose the elements 7, 5, and 4 with a sum of squares: 72 + 52 + 42 = 90.
It can be shown that this is the maximum value we can get.
 

Constraints:

1 <= k <= nums.length <= 105
1 <= nums[i] <= 109
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
57,973/81K
Acceptance Rate
71.6%
Topics
Senior Staff
Array
Hash Table
Greedy
Bit Manipulation
Weekly Contest 366
icon
Companies
Hint 1
The operation described only transfers some bits from one element to another in their binary representation.
Hint 2
To have a maximum sum of squares, it is optimal to greedily make each number as big as possible.
Similar Questions
Minimize OR of Remaining Elements Using Operations
Hard
*/

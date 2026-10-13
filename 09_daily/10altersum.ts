function maxAlternatingSum(nums: number[]): number {
  const sq = nums.map((x) => x * x).sort((a, b) => b - a);
  const plus = Math.ceil(nums.length / 2);

  let score = 0;
  for (let i = 0; i < sq.length; i++) {
    score += i < plus ? sq[i] : -sq[i];
  }
  return score;
}

function maxAlternatingSumBrute(nums: number[]): number {
  const perms = permutationsSwap([...nums]);
  let best = -Infinity;

  for (const arr of perms) {
    let res = 0;
    for (let j = 0; j < arr.length; j++) {
      res += (j % 2 === 0 ? 1 : -1) * arr[j] * arr[j];
    }
    if (res > best) best = res;
  }
  return best;
}

function maxAlternatingSumMine(nums: number[]): number {
  let res = 0;
  let score = 0;
  const resArray = permutationsSwap(nums);

  for (let i = 0; i < resArray.length; i++) {
    res = 0;
    for (let j = 0; j < resArray[i].length; j++) {
      if (j % 2 === 0) {
        res += resArray[i][j] * resArray[i][j];
        console.log("Plus", res);
      } else {
        res -= resArray[i][j] * resArray[i][j];
        console.log("Minus: ", res);
      }
    }
    if (res > score) {
      score = res;
      console.log("Score", score);
    }
  }

  return score;
}

function permutationsSwap(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number): void {
    if (start === nums.length) {
      result.push([...nums]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0);
  return result;
}

// console.log(permutationsSwap([1, 2, 3]));
// console.log(permutationsSwap([1, 2, 3])[0].length);
// console.log(permutationsSwap([1, 2, 3])[0][1]);
console.log(maxAlternatingSum([1, 2, 3]));

/*
A1:
1. Define, res and score = 0, and sort the nums array. and Start an iteration with the size of nums.
2. Start another iteration with size of nums.
3. In the res variable, add the nums[j]'s square...


A2: 
1. Define, res, score = 0, store the resultant all permutations in resArray = perms.
2. Start an iteration, and put a conditional.. 
    if i % 2 === 0, then res += nums[i]'s square.
    else res -= nums[i]'s square.
3. if res > score, then score = res.
4. return score.
*/

/*
3727. Maximum Alternating Sum of Squares
Medium
Topics
premium lock icon
Companies
Hint
You are given an integer array nums. You may rearrange the elements in any order.

The alternating score of an array arr is defined as:

score = arr[0]2 - arr[1]2 + arr[2]2 - arr[3]2 + ...
Return an integer denoting the maximum possible alternating score of nums after rearranging its elements.

 

Example 1:

Input: nums = [1,2,3]

Output: 12

Explanation:

A possible rearrangement for nums is [2,1,3], which gives the maximum alternating score among all possible rearrangements.

The alternating score is calculated as:

score = 22 - 12 + 32 = 4 - 1 + 9 = 12

Example 2:

Input: nums = [1,-1,2,-2,3,-3]

Output: 16

Explanation:

A possible rearrangement for nums is [-3,-1,-2,1,3,2], which gives the maximum alternating score among all possible rearrangements.

The alternating score is calculated as:

score = (-3)2 - (-1)2 + (-2)2 - (1)2 + (3)2 - (2)2 = 9 - 1 + 4 - 1 + 9 - 4 = 16

 

Constraints:

1 <= nums.length <= 105
-4 * 104 <= nums[i] <= 4 * 104
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
127,746/170.6K
Acceptance Rate
74.9%
Topics
Senior
Array
Greedy
Sorting
Weekly Contest 473
icon
Companies
Hint 1
The score uses squares of values. The original signs of nums don't affect the squared terms.
Hint 2
In the alternating sum, even indices contribute positively and odd indices negatively.
*/

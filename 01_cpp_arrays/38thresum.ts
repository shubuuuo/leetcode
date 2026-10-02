function threeSum(nums: number[]): number[][] {
  let ans: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      for (let k = 0; k < nums.length; k++) {
        let newArr = [nums[i], nums[j], nums[k]];
        if (nums[i] + nums[j] + nums[k] === 0 && containsMatch(ans, newArr)) {
          ans.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return ans;
}

function containsMatch(ans: number[][], newArr: number[]): boolean {
  const sortedNew = [...newArr].sort((a, b) => a - b);
  return ans.some((sub) => {
    if (sub.length !== newArr.length) return false;
    const sortedSub = [...sub].sort((a, b) => a - b);
    return sortedSub.every((val, i) => val === sortedNew[i]);
  });
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/*
A1:
1. What will be the extreme brute force solution? Putting on three for loops for each varibale? 
*/

/*
15. 3Sum
Medium
Topics
premium lock icon
Companies
Hint
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
6,562,665/16.4M
Acceptance Rate
40.0%
Topics
Array
Two Pointers
Sorting
*/

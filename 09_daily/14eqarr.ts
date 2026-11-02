function minMoves2tried(nums: number[]): number {
  let res = 0;
  let low = Math.min(...nums);
  let high = Math.max(...nums);
  let mid = high - low;
  let temp = high;
  let equal = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > mid) {
      if (nums[i] - mid < temp) {
        temp = nums[i] - mid;
        equal = nums[i];
      }
    }
    if (mid > nums[i]) {
      if (mid - nums[i] < temp) {
        temp = mid - nums[i];
        equal = nums[i];
      }
    }
    if (mid === nums[i]) {
      equal = mid;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < equal) {
      res += equal - i;
    }
    if (nums[i] > equal) {
      res += i - equal;
    }
  }

  return res;
}

function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let i = 0,
    j = nums.length - 1,
    res = 0;
  while (i < j) {
    res += nums[j] - nums[i];
    i++;
    j--;
  }
  return res;
}

console.log(minMoves2([1, 2, 3]));
console.log(minMoves2([1, 10, 2, 9]));

function minMoves2qs(nums: number[]): number {
  const a = [...nums]; // quickselect mutates; drop the copy if that's fine
  const median = quickSelect(a, Math.floor(a.length / 2));
  let res = 0;
  for (const x of a) res += Math.abs(x - median);
  return res;
}

function minMoves2me(nums: number[]): number {
  nums.sort((a, b) => a - b); // the comparator matters: default sort is lexicographic
  const median = nums[Math.floor(nums.length / 2)];
  let res = 0;
  for (const x of nums) res += Math.abs(x - median);
  return res;
}

function minMoves2op(nums: number[]): number {
  let best = Infinity;
  for (const target of nums) {
    let cost = 0;
    for (const x of nums) cost += Math.abs(x - target);
    best = Math.min(best, cost);
  }
  return best;
}

function quickSelect(a: number[], k: number): number {
  let lo = 0,
    hi = a.length - 1;
  while (lo < hi) {
    const pivot = a[lo + Math.floor(Math.random() * (hi - lo + 1))];
    let lt = lo,
      i = lo,
      gt = hi;
    while (i <= gt) {
      if (a[i] < pivot) {
        [a[lt], a[i]] = [a[i], a[lt]];
        lt++;
        i++;
      } else if (a[i] > pivot) {
        [a[i], a[gt]] = [a[gt], a[i]];
        gt--;
      } else {
        i++;
      }
    }
    // a[lo..lt-1] < pivot, a[lt..gt] == pivot, a[gt+1..hi] > pivot
    if (k < lt) hi = lt - 1;
    else if (k > gt) lo = gt + 1;
    else return pivot;
  }
  return a[lo];
}

/*
A1:
    - Iterate through the array to find the middle number (Choosing the number we will be making our array equal)
    - run a for loop with prechoosen the highest and lowest in the array & find a number that is closest to the midpoint of highest and lowest.
    - how do we find that? we check for the difference with ignoring the sign. we check for the number which has the lowest diffence with the mid point and we store that as our equal..s
    - After that, we run another loop again, and if the said number is lesser than our equal then increment the result with (res = equal - i) & if the said number is greater than we increment with (res = i - equal) as like this we increment our res & return it at the end.
*/

/*
462. Minimum Moves to Equal Array Elements II
Medium
Topics
premium lock icon
Companies
Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

In one move, you can increment or decrement an element of the array by 1.

Test cases are designed so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
Example 2:

Input: nums = [1,10,2,9]
Output: 16
 

Constraints:

n == nums.length
1 <= nums.length <= 105
-109 <= nums[i] <= 109
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
286,243/445.1K
Acceptance Rate
64.3%
Topics
Principal
Array
Math
Sorting
icon
Companies
Similar Questions
Best Meeting Point
Hard
Minimum Moves to Equal Array Elements
Medium
Minimum Operations to Make a Uni-Value Grid
Medium
Removing Minimum Number of Magic Beans
Medium
Minimum Cost to Make Array Equal
Hard
Minimum Operations to Make All Array Elements Equal
Medium
Minimum Cost to Make Array Equalindromic
Medium
Minimum Operations to Make Subarray Elements Equal
Medium
Minimum Operations to Make Elements Within K Subarrays Equal
Hard
*/

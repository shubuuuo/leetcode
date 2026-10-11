function mySqrt(x: number): number {
  let low = 0;
  let high = x;
  let res = 0;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (mid * mid > x) {
      high = mid - 1;
    } else if (x > mid * mid) {
      low = mid + 1;
      res = mid;
    } else {
      return mid;
    }
  }
  return res;
}

console.log(mySqrt(8));

/*
A1:
Just tweaked a little bit of perfect square problem
*/

/*
69. Sqrt(x)
Easy
Topics
premium lock icon
Companies
Hint
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
3,495,177/8.3M
Acceptance Rate
42.3%
Topics
Math
Binary Search
Newton's Method
icon
Companies
Hint 1
Try exploring all integers. (Credits: @annujoshi)
Hint 2
Use the sorted property of integers to reduced the search space. (Credits: @annujoshi)
Similar Questions
Pow(x, n)
Medium
Valid Perfect Square
Easy
*/

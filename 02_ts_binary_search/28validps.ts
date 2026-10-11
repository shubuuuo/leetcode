function isPerfectSquare(num: number): boolean {
  let low = 0;
  let high = num;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let res = mid * mid;

    if (res > num) {
      high = mid - 1;
    } else if (num > res) {
      low = mid + 1;
    } else if (res === num) {
      return true;
    }
  }
  return false;
}

console.log(isPerfectSquare(14));

/*
A1:

1. Okay, Clearly a problem where a search space can be divided in less than half so Yeahh, Binary Search.
2. take low = 0, high = num, put the condition of BS,
3. Now, res = low * low, mid = low + high/2
4. if num > res, high = mid - 1, else if res > num, low = mid + 1.
5 if res === num, return low;
*/

/*
367. Valid Perfect Square
Easy
Topics
premium lock icon
Companies
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 

Constraints:

1 <= num <= 231 - 1
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
1,010,449/2.2M
Acceptance Rate
45.1%
Topics
Math
Binary Search
icon
Companies
Similar Questions
Sqrt(x)
Easy
Sum of Square Numbers
Medium

*/

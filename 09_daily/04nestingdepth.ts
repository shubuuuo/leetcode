function maxDepth(s: string): number {
  let cnt: number = 0;
  let result: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      cnt++;
    } else if (s[i] === ")") {
      cnt--;
    }

    if (cnt > result) {
      result = cnt;
    }
  }

  return result;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));

/*
A1: 
1. Run an iteration and check for "(".
2. Start a main count, and result. In main count, if count the times of "(" came so +1, else if ")" came then -1.
3. And compare the result with the main count, if the main count is greater then push it to result if not then ignore it.
4. Return the result.
*/

/*
1614. Maximum Nesting Depth of the Parentheses
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

 

Example 1:

Input: s = "(1+(2*3)+((8)/4))+1"

Output: 3

Explanation:

Digit 8 is inside of 3 nested parentheses in the string.

Example 2:

Input: s = "(1)+((2))+(((3)))"

Output: 3

Explanation:

Digit 3 is inside of 3 nested parentheses in the string.

Example 3:

Input: s = "()(())((()()))"

Output: 3

 

Constraints:

1 <= s.length <= 100
s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
It is guaranteed that parentheses expression s is a VPS.
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
706,489/822.4K
Acceptance Rate
85.9%
Topics
Mid Level
String
Stack
Bracket Sequences
Weekly Contest 210
icon
Companies
Hint 1
The depth of any character in the VPS is the ( number of left brackets before it ) - ( number of right brackets before it )
Similar Questions
Maximum Nesting Depth of Two Valid Parentheses Strings
Medium
*/

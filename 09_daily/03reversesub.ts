function reverseParentheseswrong(s: string): string {
  let res: string = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      const j = s.indexOf("(", i);
      const key = s.slice(i + 1, j);
      reverseParentheseswrong(key);
      i = j + 1;
    } else {
      res += s[i];
    }
  }
  return res;
}
// TC = O(N^(2))

// function revnums(nums: number[]): number[] {
//   let res: number[] = [];
//   for (let i = nums.length - 1; i >= 0; i--) {
//     console.log(nums[i]);
//     res.push(nums[i]);
//   }
//   return res;
// }
// console.log(revnums([1, 2, 3, 4, 5]));

/*
A1: 
1. Start iteration with en empty res string.
2. As we know we can manupitalte the string so  we will build a new result iteratively as we move through.
3. As we know its a string in a string in a string which performs the same reverse operation, therefore resurive funtion inside iterative would be the best option.
4. We will start from behind and skip the first char and keep appending string in res until we find the ")" in the if statement. if its found
- We will find the next "(" string from the other side of the string, and input that string into the recursive funtion.
5. if no other ")" is found then it automatically goes into the else statement and we are iteratively appending it into res anyways.
6. Return res.


A2: 
1. we would need to use stack for nested brackets.
2. start appending in stack when you see "(" and keep appending until you see first ")".
3. pop to the last appended "(" then store it into a key then push it again into the stack in reverse order with skipping brackets.
4. Do it until while loop is exhausted. and last remaining ")" is found and reversed again.
*/
function reverseParentheses(s: string): string {
  const stack: string[] = [];

  let res: string = "";
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(") {
      stack.push(res);
      res = "";
    } else if (s[i] === ")") {
      const prev = stack.pop() ?? "";
      res = prev + [...res].reverse().join("");
    } else {
      res += s[i];
    }
    i++;
  }

  return res;
}
// TC = O(N^(2))
// SC = O(N)

console.log(reverseParentheses("(u(love)i)"));

/*
link = [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/?envType=daily-question&envId=2026-09-27]
1190. Reverse Substrings Between Each Pair of Parentheses
Medium
Topics
premium lock icon
Companies
Hint
You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
 

Constraints:

1 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It is guaranteed that all parentheses are balanced.
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
266,296/365.7K
Acceptance Rate
72.8%
Topics
Senior
String
Stack
Bracket Sequences
*/

class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

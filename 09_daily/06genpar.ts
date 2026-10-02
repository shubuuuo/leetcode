function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function back(
    currentStr: string,
    openCount: number,
    closeCount: number,
  ): void {
    if (currentStr.length === 2 * n) {
      result.push(currentStr);
      return;
    }

    if (openCount < n) {
      back(currentStr + "(", openCount + 1, closeCount);
    }

    if (closeCount < openCount) {
      back(currentStr + ")", openCount, closeCount + 1);
    }
  }

  back("", 0, 0);
  return result;
}

console.log(generateParenthesis(3));

/*
22. Generate Parentheses
Solved
Medium
Topics
premium lock icon
Companies
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
3,214,403/4M
Acceptance Rate
79.6%
Topics
String
Dynamic Programming
Backtracking
Bracket Sequences
*/

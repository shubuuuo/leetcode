function maxDepthAfterSplit(seq: string): number[] {
  let curr: number = 0;
  let prev: number = 0;
  let answer: number[] = [];

  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === "(") {
      curr++;
    } else if (seq[i] === ")") {
      curr--;
    }

    const rangeStart = Math.min(prev, curr);
    answer[i] = rangeStart % 2;

    prev = curr;
  }

  return answer;
}

console.log(maxDepthAfterSplit("(()())"));
console.log(maxDepthAfterSplit("()(())()"));

function maxDepthAfterSplitdiffstyle(seq: string): number[] {
  let depth = 0;
  const answer: number[] = [];

  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === "(") {
      depth++;
      answer[i] = depth % 2;
    } else {
      answer[i] = depth % 2;
      depth--;
    }
  }

  return answer;
}

/*
A1:
1. Take the maxDepth code and just add one if statement, that keep the result answer[i] = 0 (A) if seq[i] = result = 1
    - else if it increases, then switch to B, if it increases more than switch to A, for each increase, switch it.
    - same for each decrease.
2. Therefor it would look something like this, odd = A, even = B
3. But there's a problem in this approach, it will just cycle through all the cases, but we want the range of answers.
    - for example, if the output is... 0-1 = odd, and if the output is 1-2 = even
    - 
I want the answer to cycle through...
like...
no matter how much our range increases...
like.. if the range is..
0-1, 2-3, 4-5 then answer needs to be odd
else if range is 1-2, 3-4, 5-6 then answer needs to be even.

I need to change the output based on where the range is keeping itself, like if the number from input is increasing from 0 to 1 or it's decreasing from 1 to 0, both the answer needs to be odd, else if the input is heading from 1 to 2 or decreasing from 2 to 1, the answer needs to even

Okay, so let me tell you, this isnt a band question, my input isnt going to be in decimals..
I need you tell me a way to change my answers.
This is the condition I am talking about:
input is flowing this way: i wnt output like this
0 -> 1 : 0
1 -> 0 : 0
0 -> 1 : 0
1 -> 2 : 1
2 -> 3 : 0
3 -> 2 : 0
2 -> 1 : 1
1 -> 0 : 0

So, actual answer
1st:
0->1:0
1->2:1
2->1:1
1->2:1
2->1:1
1->0:0

2nd:
0->1:0
1->0:0
0->1:0
1->2:1
2->1:1
1->0:0
0->1:0
1->0:0
*/

/*
https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/description/?envType=daily-question&envId=2026-09-30
1111. Maximum Nesting Depth of Two Valid Parentheses Strings
Medium
Topics
premium lock icon
Companies
A string is a valid parentheses string (denoted VPS) if and only if it consists of "(" and ")" characters only, and:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are VPS's, or
It can be written as (A), where A is a VPS.
We can similarly define the nesting depth depth(S) of any VPS S as follows:

depth("") = 0
depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's
depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS seq, split it into two disjoint subsequences A and B, such that A and B are VPS's (and A.length + B.length = seq.length). The subsequences may not necessarily be contiguous.

For example, for the sequence 123456789, one possible split is:

A = {1, 3, 5, 7, 9},

B = {2, 4, 6, 8}.

This corresponds to the output [0, 1, 0, 1, 0, 1, 0, 1, 0]  where 0 indicates membership in A and 1 indicates membership in B.

Now choose any such A and B such that max(depth(A), depth(B)) is the minimum possible value.

Return an answer array (of length seq.length) that encodes such a choice of A and B:  answer[i] = 0 if seq[i] is part of A, else answer[i] = 1.  Note that even though multiple answers may exist, you may return any of them.

 

Example 1:

Input: seq = "(()())"
Output: [0,1,1,1,1,0]
Example 2:

Input: seq = "()(())()"
Output: [0,0,0,1,1,0,1,1]
 

Constraints:

1 <= seq.size <= 10000
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
42,305/56.9K
Acceptance Rate
74.3%
Topics
Senior Staff
String
Stack
Bracket Sequences
Weekly Contest 144
icon
Companies
Similar Questions
Maximum Nesting Depth of the Parentheses
*/

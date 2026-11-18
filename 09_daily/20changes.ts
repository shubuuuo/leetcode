function minChangeswrong(s: string): number {
  let i = 0;
  let j = s.length;
  let cnt = 0;

  if (s.length === 0 || (s.length === 2 && s[0] === s[1])) {
    return 0;
  } else if (s.length === 2 && s[0] !== s[1]) {
    return 1;
  }

  while (i < j && i !== j) {
    if (s[i] === s[i + 1]) {
      i = i + 2;
    } else {
      cnt++;
    }
    if (s[j] === s[j - 1]) {
      j = j - 2;
    } else {
      cnt++;
    }
  }
  return cnt;
}

function minChanges(s: string): number {
  let cnt = 0;
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) cnt++;
  }
  return cnt;
}

console.log(minChanges("1001"));
console.log(minChanges("10"));

/*
A1:
1. We will use two pointer approach one from front and one from back, we will store the first char and check if the char infront of it is same as the current one, if yes then skip the current and next char and move to infront of it if available. 
2. Keep the while loop running until i and j crosses each other.
3. Keep the counter and increment it every time any string is changed on i or j.
4. Edge cases includes empty string which returns 0 and and string iwth 2 chars which returns 1. 
*/

/*
2914. Minimum Number of Changes to Make Binary String Beautiful
Medium
Topics
premium lock icon
Companies
Hint
You are given a 0-indexed binary string s having an even length.

A string is beautiful if it's possible to partition it into one or more substrings such that:

Each substring has an even length.
Each substring contains only 1's or only 0's.
You can change any character in s to 0 or 1.

Return the minimum number of changes required to make the string s beautiful.

 

Example 1:

Input:
const s: string = "1001";

Output: 2
Explanation: We change s[1] to 1 and s[3] to 0 to get string "1100".
It can be seen that the string "1100" is beautiful because we can partition it into "11|00".
It can be proven that 2 is the minimum number of changes needed to make the string beautiful.
Example 2:

Input:
const s: string = "10";

Output: 1
Explanation: We change s[1] to 1 to get string "11".
It can be seen that the string "11" is beautiful because we can partition it into "11".
It can be proven that 1 is the minimum number of changes needed to make the string beautiful.
Example 3:

Input:
const s: string = "0000";

Output: 0
Explanation: We don't need to make any changes as the string "0000" is beautiful already.
 

Constraints:

2 <= s.length <= 105
s has an even length.
s[i] is either '0' or '1'.
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
235,305/297.3K
Acceptance Rate
79.1%
Topics
Senior
String
Biweekly Contest 116
icon
Companies
Hint 1
For any valid partition, since each part consists of an even number of the same characters, we can further partition each part into lengths of exactly 2.
Hint 2
After noticing the first hint, we can decompose the whole string into disjoint blocks of size 2 and find the minimum number of changes required to make those blocks beautiful.
*/

function evaluatewrong(s: string, knowledge: string[][]): string {
  let temp: string = "";
  let j: number = 0;
  let k: number = 0;
  const keys = knowledge.map(([key, value]) => key);
  let res: string = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      j = i;
    }
    if (s[i] === ")") {
      temp = s.slice(j, i);

      if (keys.includes(temp, k)) {
        const value = knowledge.find(([key]) => key === temp)?.[k + 1];
        console.log(value);
        res = s.replace("(" + temp + ")", value ?? "?");
        k++;
      } else {
        res = s.replace("(" + temp + ")", "?");
      }
    }
  }

  return res;
}

function evaluate(s: string, knowledge: string[][]): string {
  const map = new Map(knowledge.map(([k, v]) => [k, v]));
  let res = "";
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(") {
      const j = s.indexOf(")", i);
      const key = s.slice(i + 1, j);
      res += map.get(key) ?? "?";
      i = j + 1;
    } else {
      res += s[i];
      i++;
    }
  }
  return res;
}

console.log(
  evaluate("(name)is(age)yearsold", [
    ["name", "bob"],
    ["age", "two"],
  ]),
);

/*
and how are you tracking the which part to replace and how? like... you replaced "(name)" and you didnt have to isolate them?

you just juped to j index of string where ")" is and yousliced it of and stored it into key variable...

then what? you added that vlaue by finding the value form map.get else "?" will be added... but one question..
how is not the other charachters of the string is affected?
my main concern was not affecting the other charachters.. 

Ohhh.. you kept adding in the else block always and once "(" is found, you added the whole key string and skipped ")" and just moved on until new "(" comes if there are any...
*/

/*
Approach 1: [
a. Run a 'for' loop and use two pointers approach
b. check [i] for "(" if found then keep running till ")" is found by [j] and store the string inside it in a temperary variable by [i] & [j].
c. check the stored string with knowledge[i] keyi:
    - if they match then replace the knowledge[i] valuei with the string from the sentence along with brackets
    - if they dont match then replace with single "?"
d. Do it until the iteration of the string is completed and all the "(" and ")" are exhausted. Means i has reached its end.
]
*/

/*
1807. Evaluate the Bracket Pairs of a String
Medium
Topics
premium lock icon
Companies
Hint
You are given a string s that contains some bracket pairs, with each pair containing a non-empty key.

For example, in the string "(name)is(age)yearsold", there are two bracket pairs that contain the keys "name" and "age".
You know the values of a wide range of keys. This is represented by a 2D string array knowledge where each knowledge[i] = [keyi, valuei] indicates that key keyi has a value of valuei.

You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that contains some key keyi, you will:

Replace keyi and the bracket pair with the key's corresponding valuei.
If you do not know the value of the key, you will replace keyi and the bracket pair with a question mark "?" (without the quotation marks).
Each key will appear at most once in your knowledge. There will not be any nested brackets in s.

Return the resulting string after evaluating all of the bracket pairs.

 

Example 1:

Input: s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
Output: "bobistwoyearsold"
Explanation:
The key "name" has a value of "bob", so replace "(name)" with "bob".
The key "age" has a value of "two", so replace "(age)" with "two".
Example 2:

Input: s = "hi(name)", knowledge = [["a","b"]]
Output: "hi?"
Explanation: As you do not know the value of the key "name", replace "(name)" with "?".
Example 3:

Input: s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]
Output: "yesyesyesaaa"
Explanation: The same key can appear multiple times.
The key "a" has a value of "yes", so replace all occurrences of "(a)" with "yes".
Notice that the "a"s not in a bracket pair are not evaluated.
 

Constraints:

1 <= s.length <= 105
0 <= knowledge.length <= 105
knowledge[i].length == 2
1 <= keyi.length, valuei.length <= 10
s consists of lowercase English letters and round brackets '(' and ')'.
Every open bracket '(' in s will have a corresponding close bracket ')'.
The key in each bracket pair of s will be non-empty.
There will not be any nested bracket pairs in s.
keyi and valuei consist of lowercase English letters.
Each keyi in knowledge is unique.
*/

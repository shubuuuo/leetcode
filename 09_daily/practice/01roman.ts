function intToRoman(num: number): string {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let res = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      res += symbols[i];
      num -= values[i];
    }
  }

  return res;
}

function intToRomanwrong(num: number): string {
  const mapping: Record<string, string> = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M",
  };

  const mappingTwo: Record<string, string> = {
    "4": "IV",
    "9": "IX",
    "40": "XL",
    "90": "XC",
    "400": "CD",
    "900": "CM",
  };

  let res = "";
  const inn: string = String(num);
  const hundreds = Math.floor(num / 100) * 100;
  const tens = (Math.floor(num / 10) % 10) * 10;
  const ones = num % 10;

  for (let i = inn.length; i <= 0; i++) {
    res += mappingTwo[inn[i]];
  }

  return res;
}

/*
A:
1. I will run a for loop from behind as using a stack serves not much of a purpose..
2. I will choose the last element and find that from map... if the key is in the map then the it will append the value of that key from the map..
3. But before that, I will check if the keys like 4 or 9 are in that specific place.. from another map..

A2: 
1. Make a map of both the types...
2. Deconstruct the original number into specific seperated numbers.
*/

/*
12. Integer to Roman
Medium
Topics
premium lock icon
Companies
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

 

Example 1:

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
Example 2:

Input: num = 58

Output: "LVIII"

Explanation:

50 = L
 8 = VIII
Example 3:

Input: num = 1994

Output: "MCMXCIV"

Explanation:
(
1000 = M
 900 = CM
  90 = XC
   4 = IV
 

Constraints:

1 <= num <= 3999
*/

function isValid(s: string): boolean {
  const stack = new Stack<string>();

  const mapping: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.isEmpty()) {
        return false;
      }

      const topOpen = stack.peek();

      if (mapping[char] !== topOpen) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.isEmpty();
}
/*
Approach:
1. Initialize a stack.
2. iterate and put the first "(" in stack and check for ")", if its there then pop it from the stack.
3. If another type comes of opening bracket like, "[" or "{" then put it into stack too until a type of closing bracket comes like ")" then start popping.
4. Before popping check if the correspoding opening bracket is present in the stack or not.
5. if yes then keep popping until s is exhausted then return true else, return false.
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

// Initialize and use
// const numberStack = new Stack<number>();
// numberStack.push(1);
// numberStack.push(2);

/*
20. Valid Parentheses
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

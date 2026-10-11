function judgeSquareSum(c: number): boolean {
  let low = 0;
  let high = c;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let result = low * low + high * high;

    if (result > c) {
      high = mid - 1;
    } else if (c > result) {
      low = mid + 1;
    }

    if (result === c) {
      return true;
    }
  }

  return false;
}

function judgeSquareSumBrute(c: number): boolean {
  for (let i = 0; i < Math.sqrt(c); i++) {
    for (let j = 0; j < Math.sqrt(c); j++) {
      if (i * i + j * j === c) {
        return true;
      }
    }
  }
  return false;
}

function judgeSquareSumBruteexspace(c: number): boolean {
  const mysqrt = new Set();

  for (let i = 0; i < Math.sqrt(c) + 1; i++) {
    mysqrt.add(i * i);
  }

  let a = 0;
  while (a * a <= c) {
    let target = c - a * a;
    if (mysqrt.has(target)) {
      return true;
    }
    a += 1;
  }

  return false;
}

function judgeSquareSumOptimalwrong(c: number): boolean {
  const mysqrt: number[] = [];

  for (let i = 0; i < Math.floor(Math.sqrt(c)) + 1; i++) {
    mysqrt.push(i * i);
  }

  //   From this point this question becomes leetcode problem: two sum II, Because we are literally askedto find if the sum of two numbers is equal to target, its the same porblem.

  let i = 0;
  let j = mysqrt.length;

  for (let k = 0; k < mysqrt.length; k++) {
    let res = mysqrt[i] + mysqrt[j];
    if (res === c) {
      return true;
    }

    if (res > c) {
      j--;
    }

    if (c > res) {
      i++;
    }
  }

  return false;
}

function judgeSquareSumOptimal(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    let total = left * left + right * right;

    if (total > c) {
      right--;
    } else if (total < c) {
      left++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(judgeSquareSumOptimal(5));
console.log(judgeSquareSumOptimal(13));
console.log(judgeSquareSumOptimal(25));

/*
A1:
1. Configure high as (c) and low as (0).
2. get the midpoint (c/2) and discard all the values above (c/2) because logically our two integers can never come from above (c/2) so yeah, we will work on below (c/2) now.
3. Now Binary search logic. if the sum of squares is greater than the result (c) then go lower than midpoint, but is the sum is lesser then go higher...
4. If we find the result then return true else false. 
*/

/*
633. Sum of Square Numbers
Medium
Topics
premium lock icon
Companies
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

 

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false
 

Constraints:

0 <= c <= 231 - 1
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
475,873/1.3M
Acceptance Rate
37.1%
Topics
Mid Level
Math
Two Pointers
Binary Search
icon
Companies
Similar Questions
Valid Perfect Square
Easy
Sum of Squares of Special Elements
*/

/*
In TypeScript, you can initialize a Set in a few ways:

1. Empty Set
typescript

Copy
const mySet = new Set();
2. Set from an Array
typescript

Copy
const mySet = new Set([1, 2, 3]);
// or
const mySet = new Set<string>(["a", "b", "c"]);
3. With a Generic Type
If you want to enforce types explicitly:

typescript

Copy
const mySet = new Set<number>();
mySet.add(1);
mySet.add(2);
4. From an Existing Set (copy)
typescript

Copy
const original = new Set([1, 2, 3]);
const copy = new Set(original);
Key Notes
Set only stores unique values, so duplicates are automatically removed.
You can use the generic type parameter (Set<T>) to specify what kind of values the set holds.
Common methods: .add(value), .has(value), .delete(value), .clear(), and .size.
Let me know if you want an example with a specific use case!
*/

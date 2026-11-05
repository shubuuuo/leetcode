function findTheDistanceValuewrong(
  arr1: number[],
  arr2: number[],
  d: number,
): number {
  let temp = 0;
  let res = arr1.length;
  let temp2 = true;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      temp = Math.abs(arr1[i] - arr2[j]);
      if (temp <= d) {
        temp2 = false;
      }
    }
    if (temp2 === false) {
      res--;
    }
  }
  return res;
}

function findTheDistanceValueBrute(
  arr1: number[],
  arr2: number[],
  d: number,
): number {
  let res = 0;
  for (const x of arr1) {
    let ok = true;
    for (const y of arr2) {
      if (Math.abs(x - y) <= d) {
        ok = false;
        break;
      }
    }
    if (ok) res++;
  }
  return res;
}

function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number,
): number {
  arr2.sort((a, b) => a - b);
  let res = 0;

  for (const x of arr1) {
    let lo = 0,
      hi = arr2.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr2[mid] < x) lo = mid + 1;
      else hi = mid;
    }

    let closest = Infinity;
    if (lo < arr2.length) closest = Math.min(closest, arr2[lo] - x);
    if (lo > 0) closest = Math.min(closest, x - arr2[lo - 1]);

    if (closest > d) res++;
  }
  return res;
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));

/*
A1:
    - I will subtract each element of arr1 with arr2 and check if their modular difference is greater than d
    - if at any point their modular difference is less than or equal to d then I will minus 1 from result
    - result will be the size of arr1
*/

/*
1385. Find the Distance Value Between Two Arrays
Easy
Topics
premium lock icon
Companies
Hint
Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

 

Example 1:

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation: 
For arr1[0]=4 we have: 
|4-10|=6 > d=2 
|4-9|=5 > d=2 
|4-1|=3 > d=2 
|4-8|=4 > d=2 
For arr1[1]=5 we have: 
|5-10|=5 > d=2 
|5-9|=4 > d=2 
|5-1|=4 > d=2 
|5-8|=3 > d=2
For arr1[2]=8 we have:
|8-10|=2 <= d=2
|8-9|=1 <= d=2
|8-1|=7 > d=2
|8-8|=0 <= d=2
Example 2:

Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
Output: 2
Example 3:

Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
Output: 1
 

Constraints:

1 <= arr1.length, arr2.length <= 500
-1000 <= arr1[i], arr2[j] <= 1000
0 <= d <= 100
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
216,000/283.5K
Acceptance Rate
76.2%
Topics
Mid Level
Array
Two Pointers
Binary Search
Sorting
Biweekly Contest 22
icon
Companies
Hint 1
Sort 'arr2' and use binary search to get the closest element for each 'arr1[i]', it gives a time complexity of O(nlogn).
*/

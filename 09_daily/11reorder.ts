class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function treeToArray(root: TreeNode | null): (number | null)[] {
  const result: (number | null)[] = [];
  if (!root) return result;

  const queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    const node = queue.shift()!;
    if (node) {
      result.push(node.val);
      queue.push(node.left, node.right);
    } else {
      result.push(null);
    }
  }

  while (result.length && result[result.length - 1] === null) result.pop();
  return result;
}

function buildTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift()!;

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i] as number);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i] as number);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

function numOfWayswrong(nums: number[]): number {
  if (nums.length === null) {
    return 0;
  }
  let newArr: number[] = [];

  for (let i = 1; i < nums.length; i++) {
    newArr[i] = nums[i];
  }
  const t = buildTree(newArr);
  console.log(treeToArray(t));

  let res = 0;

  return res;
}

console.log(numOfWays([2, 1, 3]));

function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const current: number[] = [];
  const used: boolean[] = new Array(nums.length).fill(false);

  function backtrack(): void {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      used[i] = true;
      current.push(nums[i]);
      backtrack();
      current.pop();
      used[i] = false;
    }
  }

  backtrack();
  return result;
}

function numOfWays(nums: number[]): number {
  const MOD = 1_000_000_007n;
  const n = nums.length;

  const comb: bigint[][] = [];
  for (let i = 0; i <= n; i++) {
    comb.push(new Array<bigint>(i + 1).fill(1n));
    for (let j = 1; j < i; j++) {
      comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
    }
  }

  function ways(arr: number[]): bigint {
    if (arr.length <= 2) return 1n;

    const root = arr[0];
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < root) left.push(arr[i]);
      else right.push(arr[i]);
    }

    let result = comb[left.length + right.length][left.length];
    result = (result * ways(left)) % MOD;
    result = (result * ways(right)) % MOD;
    return result;
  }

  return Number((ways(nums) - 1n + MOD) % MOD);
}

/*
A1:
1. Get the tree, the first element will always stays the same unless the node is empty (tree is empty)
2. We will start permutation function with the rest of the array & check with the "identical" condition if that specific permutation is valid or not.
3. It will likely get O(N) space which is okay since it's a brute force solution.
4. What's the permutation function and what's the identical condition?
*/

/*
1569. Number of Ways to Reorder Array to Get Same BST
Hard
Topics
premium lock icon
Companies
Hint
Given an array nums that represents a permutation of integers from 1 to n. We are going to construct a binary search tree (BST) by inserting the elements of nums in order into an initially empty BST. Find the number of different ways to reorder nums so that the constructed BST is identical to that formed from the original array nums.

For example, given nums = [2,1,3], we will have 2 as the root, 1 as a left child, and 3 as a right child. The array [2,3,1] also yields the same BST but [3,2,1] yields a different BST.
Return the number of ways to reorder nums such that the BST formed is identical to the original BST formed from nums.

Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:


Input: nums = [2,1,3]
Output: 1
Explanation: We can reorder nums to be [2,3,1] which will yield the same BST. There are no other ways to reorder nums which will yield the same BST.
Example 2:


Input: nums = [3,4,5,1,2]
Output: 5
Explanation: The following 5 arrays will yield the same BST: 
[3,1,2,4,5]
[3,1,4,2,5]
[3,1,4,5,2]
[3,4,1,2,5]
[3,4,1,5,2]
Example 3:


Input: nums = [1,2,3]
Output: 0
Explanation: There are no other orderings of nums that will yield the same BST.
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= nums.length
All integers in nums are distinct.
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
82,100/139.1K
Acceptance Rate
59.0%
Topics
Principal
Array
Math
Divide and Conquer
Dynamic Programming
Tree
Union-Find
Binary Search Tree
Memoization
Combinatorics
Binary Tree
Fermat's Little Theorem
Weekly Contest 204
icon
Companies
Hint 1
Use a divide and conquer strategy.
Hint 2
The first number will always be the root. Consider the numbers smaller and larger than the root separately. When merging the results together, how many ways can you order x elements in x+y positions?
*/

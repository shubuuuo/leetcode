function createGrid(m: number, n: number): string[] {
  const result: string[] = [];

  for (let i = 0; i < m; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === n - 1) {
        row += ".";
      } else {
        row += "#";
      }
    }
    result.push(row);
  }

  return result;
}
/*
A1:
    - The starting position is always = (0, 0) & ending position = (m - 1, n - 1)
    - Increment to reach the ending state, first n, then m.
    - if any of them are over then keep increming what is remaining to reach the final state.
    - values cannot go in negetive.
    - Now, How to develop a string through this? 
        - Start a while loop until both m & n are zero.
        - Do the logic & store all the points in an array.
        - Create another function to build a string.
            - In that function, Add "." to multidimentional array to all the points mentioned
            - else add "#"
*/

/*
3963. Create Grid With Exactly One Path
Easy
premium lock icon
Companies
Hint
You are given two integers m and n, representing the number of rows and columns of a grid.

Construct any m x n grid consisting only of the characters '.' and '#', where:

'.' represents a free cell.
'#' represents an obstacle cell.
A valid path is a sequence of free cells that:

Starts at the top-left cell (0, 0).
Ends at the bottom-right cell (m - 1, n - 1).
Moves only:
Right, from (i, j) to (i, j + 1), or
Down, from (i, j) to (i + 1, j).
Return any grid such that there is exactly one valid path from the top-left cell to the bottom-right cell.

 

Example 1:

Input: m = 2, n = 3

Output: ["..#","#.."]

Explanation:



The only valid path is: (0,0) → (0,1) → (1,1) → (1,2)

Example 2:

Input: m = 3, n = 3

Output: ["..#","#..","##."]

Explanation:



The only valid path is: (0,0) → (0,1) → (1,1) → (1,2) → (2,2)

Example 3:

Input: m = 1, n = 4

Output: ["...."]

Explanation:

The only valid path is: (0,0) → (0,1) → (0,2) → (0,3)

 

Constraints:

1 <= m, n <= 25
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
138,528/161.4K
Acceptance Rate
85.8%
Topics
Mid Level
Biweekly Contest 185
icon
Companies
Hint 1
It is enough to leave one simple route made of free cells and block every other cell.
Hint 2
There are many routes to choose from. What is the simplest one you can think of?
Hint 3
One possible route: Go right while possible, then go down till you reach the destination.
*/

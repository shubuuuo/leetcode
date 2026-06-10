function rotateStringTwo(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }
  let cnt = false;

  let index = goal.indexOf(s);

  for (let i = index; i < goal.length; i++) {
    if (goal[i] === s[(i - index) % s.length]) {
      cnt = true;
    } else {
      cnt = false;
    }
  }

  return cnt;
}

// console.log(rotateString("abcde", "bcdea"));

// Current Approach:
// first the base case: look for if the string and goal has same length else, false.
// then turn on a loop and check if the first charachter of string is present in goal
// if yes then at which index.. then take the index and check for other charachters until goal is exhausted of size.

// Short/Currect approach - // Key insight: if goal is a rotation of s, then goal will be a substring of s + s

function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  return (s + s).includes(goal);
}

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
console.log(rotateString("abcde", "bcdea")); // true

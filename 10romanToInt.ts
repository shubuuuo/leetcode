let integers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let count = 0;
  let skipNext = false;

  for (let i = 0; i < s.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }
    if (s[i] === "I" && s[i + 1] === "V") {
      count += 4;
      skipNext = true;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      count += 9;
      skipNext = true;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      count += 40;
      skipNext = true;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      count += 90;
      skipNext = true;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      count += 400;
      skipNext = true;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      count += 900;
      skipNext = true;
    } else if (s[i] == "I") {
      count += 1;
    } else if (s[i] == "V") {
      count += 5;
    } else if (s[i] == "X") {
      count += 10;
    } else if (s[i] == "L") {
      count += 50;
    } else if (s[i] == "C") {
      count += 100;
    } else if (s[i] == "D") {
      count += 500;
    } else if (s[i] == "M") {
      count += 1000;
    }
  }

  return count;
}

console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

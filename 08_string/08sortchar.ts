function frequencySortWrong(s: string): string {
  let cnt = 1;
  let temp = "";
  let tempone = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === s[i - 1]) {
      cnt++;
    }
    if (cnt > 1) {
      temp += s[i + 1];
      cnt--;
    } else if (cnt === 1) {
      tempone += s[i];
    }
  }

  return temp + tempone;
}

function frequencySort(s: string): string {
  const freq: Record<string, number> = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

  let result = "";
  for (let char of sorted) {
    result += char.repeat(freq[char]);
  }

  return result;
}

// My algorithm
// cnt = 1
// Start interation from the back
// Conditional statement: If the charachter infront is same as before then cnt++
// If the count goes above 1 then add that charachter into temp until cnt is 1 again
// then add all other characters into temp again

console.log(frequencySort("tree"));

function atMostKDistinct(s: string, k: number): number {
  let left = 0;
  let res = 0;
  const freq = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    // Add current character
    freq.set(s[right], (freq.get(s[right]) ?? 0) + 1);

    // Shrink window if distinct characters exceed k
    while (freq.size > k) {
      const leftChar = s[left];
      freq.set(leftChar, freq.get(leftChar)! - 1);
      if (freq.get(leftChar) === 0) freq.delete(leftChar);
      left++;
    }

    // Count substrings in current window
    res += right - left + 1;
  }

  return res;
}

function countSubstrings(s: string, k: number): number {
  // Exactly k = atMost(k) - atMost(k-1)
  return atMostKDistinct(s, k) - atMostKDistinct(s, k - 1);
}

// Sample test
const s = "pqpqs";
const k = 2;
console.log("Count:", countSubstrings(s, k)); // Output: 7

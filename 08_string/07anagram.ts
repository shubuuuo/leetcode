function isAnagramfalse(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let temp = false;

  for (let i = 0; i < s.length; i++) {
    if (s.includes(t[i])) {
      temp = true;
    } else {
      temp = false;
    }
  }

  return temp;
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const freq: Record<string, number> = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of t) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

function longestPalindromeBruteBrute(s: string): string {
  let substr = "";
  let left = 0;

  for (let i = s.length; i > 0; i--) {
    substr = s.substring(left, i);
    if (substr === reverse(substr)) {
      return substr;
    } else {
      left++;
    }
  }

  return substr;
}

function reverse(s: string): string {
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev;
}

console.log(longestPalindrome("babad"));

function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);

    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
}

function expandAroundCenter(s: string, left: number, right: number): number {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

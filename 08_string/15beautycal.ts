function beautySum(s: string): number {
  let totalBeauty = 0;

  for (let i = 0; i < s.length; i++) {
    // Frequency array for characters 'a' through 'z'
    const freq = new Array(26).fill(0);

    for (let j = i; j < s.length; j++) {
      // Update frequency of the current character
      const charCode = s.charCodeAt(j) - 97; // 97 is 'a'
      freq[charCode]++;

      // Calculate beauty of current substring s[i...j]
      totalBeauty += getBeauty(freq);
    }
  }

  return totalBeauty;
}

function getBeauty(freq: number[]): number {
  let maxFreq = 0;
  let minFreq = Infinity;

  for (let count of freq) {
    if (count > 0) {
      maxFreq = Math.max(maxFreq, count);
      minFreq = Math.min(minFreq, count);
    }
  }

  // Beauty is 0 if all characters appear the same number of times
  return maxFreq - minFreq;
}

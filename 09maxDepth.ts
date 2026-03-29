function maxDepth(s: string): number {
  let count = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }
    if (result < count) {
      result = count;
    }
  }
  return result;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("(1)+((2))+(((3)))"));

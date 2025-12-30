// Why Your Logic is Wrong
// Problem Requirements:

// Find a substring (contiguous)
// That represents an odd number
// That is the largest possible
function largestOddNumberTrial(num: string): string {
  let newStr: string = "";
  for (let index = num.length - 1; index >= 0; index--) {
    if (parseInt(num[index]) % 2 === 0) {
      newStr = num.slice(0, index) + num.slice(index + 1);
      console.log(num.slice(0, index));
      console.log(num.slice(index + 1));
    }
  }
  return newStr;
}

function largestOddNumber(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 === 1) {
      return num.slice(0, i + 1);
    }
  }
  return "";
}

console.log(largestOddNumber("35427"));

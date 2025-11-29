function removeOuterParentheses(s: string): string {
  let cnt: number = 0;
  const newStr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      cnt++;
      if (cnt > 1) {
        newStr.push("(");
      }
    } else {
      cnt--;
      if (cnt > 0) {
        newStr.push(")");
      }
    }
  }

  return newStr.join("");
}

console.log(removeOuterParentheses("((()))"));

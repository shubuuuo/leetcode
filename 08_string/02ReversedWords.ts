function reverseWordsCharachter(s: string): string {
  const newStr: string[] = [];

  for (let i = s.length; i >= 0; i--) {
    if (s[i] !== " ") {
      newStr.push(s[i]);
    } else {
      if (s[i - 1] !== " ") {
        newStr.push(" ");
      }
    }
  }

  return newStr.join("");
}

function reverseWords(s: string): string {
  let result: string[] = [];
  let word: string = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word = s[i] + word;
    } else if (word.length > 0) {
      result.push(word);
      word = "";
    }
  }

  if (word.length > 0) {
    result.push(word);
  }

  return result.join(" ");
}

console.log(reverseWords("the sky is blue"));

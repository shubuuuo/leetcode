function longestcommonwrrong(words: string[]): String {
  //   let prefix: string = "";
  let prefix: string = words[0];
  if (words.length === 0) {
    return prefix;
  }

  //   if (words.length === 1) {
  //     return words[0];
  //   }

  for (let i = 0; i <= words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i].substring(0, j) === words[i + 1].substring(0, j)) {
        prefix = words[i].substring(0, j);
      } else {
        break;
      }
    }
  }

  return prefix;
}

function longestcommon(words: string[]): string {
  if (words.length === 0) return "";

  let first = words[0];

  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < words.length; j++) {
      if (i >= words[j].length || words[j][i] !== first[i]) {
        return first.substring(0, i);
      }
    }
  }

  return first;
}

console.log(longestcommon(["apple", "apache"]));
console.log(longestcommon(["flower", "flow", "flight"]));
console.log(longestcommon(["apple", "banana", "grape", "mango"]));

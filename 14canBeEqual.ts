function canBeEqualWrong(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    for (let j = 2; j < s1.length; j++) {
      let arr = s1.split("");
      [arr[i], arr[j]] = [arr[j], arr[i]];

      if (s1[i] == s2[j] && s1[j] == s2[i]) {
        return true;
      }
    }
  }

  return false;
}

function canBeEqual(s1: string, s2: string): boolean {
  const a = s1[0],
    b = s1[1],
    c = s1[2],
    d = s1[3];
  const targetA = s2[0],
    targetB = s2[1],
    targetC = s2[2],
    targetD = s2[3];

  const evenMatch =
    (a === targetA && c === targetC) || (a === targetC && c === targetA);

  const oddMatch =
    (b === targetB && d === targetD) || (b === targetD && d === targetB);

  return evenMatch && oddMatch;
}

console.log(canBeEqual("abcd", "cdab"));

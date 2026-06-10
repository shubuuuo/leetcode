function isomorphic(s: String, t: String): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let temp: boolean = false;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j] && t[i] === t[j]) {
        if (s[j].indexOf === t[j].indexOf) {
          temp = true;
        }
      } else if (s[i] !== s[j]) {
        temp = true;
      } else {
        temp = false;
      }
    }
  }

  return temp;
}

function isomorphictwo(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let mapST = new Map<string, string>();
  let mapTS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    // Check s → t mapping
    if (mapST.has(c1)) {
      if (mapST.get(c1) !== c2) return false;
    } else {
      mapST.set(c1, c2);
    }

    // Check t → s mapping
    if (mapTS.has(c2)) {
      if (mapTS.get(c2) !== c1) return false;
    } else {
      mapTS.set(c2, c1);
    }
  }

  return true;
}

function isomorphicThree(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let lastSeenS = new Array(256).fill(-1);
  let lastSeenT = new Array(256).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let codeS = s.charCodeAt(i);
    let codeT = t.charCodeAt(i);

    if (lastSeenS[codeS] !== lastSeenT[codeT]) {
      return false;
    }

    lastSeenS[codeS] = i;
    lastSeenT[codeT] = i;
  }

  return true;
}

function isomorphicOptimal(s: string, t: string): boolean {
  // let m1: Array<>[256] = "";
  // let m2: Array[256] = "";
  // for (let i = 0; i < s.length; i++) {
  //     if (m1[s[i]] !== m2[t[i]]) {
  //         return false;
  //     }
  //     m1[s[i]] = i + 1;
  //     m2[t[i]] = i + 1;
  // }
  return true;
}

console.log(isomorphictwo("paper", "title"));
console.log(isomorphictwo("foo", "bar"));

// TC -> O(Log2N)
// SC -> O(Log2N)
function conver2binary(x: number): string {
  if (x === 0) return "0";
  let ans: string = "";
  let tempX = Math.floor(x);

  while (tempX > 0) {
    ans += (tempX % 2).toString();
    tempX = Math.floor(tempX / 2);
  }

  return ans.split("").reverse().join("");
}

// console.log(conver2binary(13));

// TC -> O(N)
// SC -> O(1)
function convert2decimal(x: string): number {
  if (x === "0") return 0;
  let ans: number = 0;
  let reversed = x.split("").reverse().join("");
  //   console.log(reversed);

  for (let i = 0; i < reversed.length; i++) {
    // console.log(Number(x[i]));
    ans += Number(reversed[i]) * Math.pow(2, i);
    // console.log(ans);
  }

  return ans;
}

// console.log(convert2decimal("1101"));

function oneCompliment(x: string): string {
  let res: string = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "1") {
      res += "0";
    } else {
      res += "1";
    }
  }
  return res;
}

// console.log(oneCompliment("1101"));

function twoCompliment(x: string): string {
  let ones = oneCompliment(x);
  let n = ones.length;
  let res = ones.split("");
  let carry = 1;

  for (let i = n - 1; i >= 0; i--) {
    if (ones[i] === "0" && carry === 1) {
      res[i] = "1";
      carry = 0;
    } else if (ones[i] === "1" && carry === 1) {
      res[i] = "0";
      carry = 1;
    }
  }
  return res.join("");
}

function twoComplementOpt(x: string): string {
  const chars = x.split("");
  let i = chars.length - 1;

  // 1. Move left until we find the first '1'
  while (i >= 0 && chars[i] === "0") {
    i--;
  }

  // 2. If no '1' was found (e.g., input "000"),
  // the 2's complement is effectively the same width or requires an overflow bit.
  if (i === -1) {
    return "1" + x; // Or handle as per your specific bit-width requirements
  }

  // 3. Move further left and flip the remaining bits
  i--;
  while (i >= 0) {
    chars[i] = chars[i] === "1" ? "0" : "1";
    i--;
  }

  return chars.join("");
}

// console.log(twoCompliment("0100"));

function andlogic(x: number, y: number): number {
  let binX = conver2binary(x);
  let binY = conver2binary(y);
  let res = "";

  // Normalize lengths: Pad with '0's to match the longest string
  const maxLength = Math.max(binX.length, binY.length);
  binX = binX.padStart(maxLength, "0");
  binY = binY.padStart(maxLength, "0");
  //   string.padStart(targetLength, padString)

  for (let i = 0; i < maxLength; i++) {
    if (binX[i] === "1" && binY[i] === "1") {
      res += "1";
    } else {
      res += "0";
    }
  }

  let finalres = convert2decimal(res);

  return finalres;
}

// The professional way
// JavaScript has native bitwise operators that perform these operations directly on the number's memory representation in $O(1)$ time and space.
function andlogicPro(x: number, y: number): number {
  return x & y;
}

// console.log(andlogic(13, 7));

function orLogic(x: number, y: number): number {
  let binX = x.toString(2);
  let binY = y.toString(2);
  const maxLength = Math.max(binX.length, binY.length);

  binX = binX.padStart(maxLength, "0");
  binY = binY.padStart(maxLength, "0");

  let res = "";
  for (let i = 0; i < maxLength; i++) {
    res += binX[i] === "1" || binY[i] === "1" ? "1" : "0";
  }
  return parseInt(res, 2);
}

// console.log(orLogic(13, 7));

function xorLogic(x: number, y: number): number {
  let binX = x.toString(2);
  let binY = y.toString(2);
  const maxLength = Math.max(binX.length, binY.length);

  binX = binX.padStart(maxLength, "0");
  binY = binY.padStart(maxLength, "0");
  let res = "";
  for (let i = 0; i < maxLength; i++) {
    res += binX[i] !== binY[i] ? "1" : "0";
  }
  return parseInt(res, 2);
}

function notLogic(x: number, bitWidth: number = 8): number {
  let bin = x.toString(2).padStart(bitWidth, "0");
  let res = "";
  for (let i = 0; i < bin.length; i++) {
    res += bin[i] === "1" ? "0" : "1";
  }
  return parseInt(res, 2);
}

function leftShift(x: number, n: number): number {
  let bin = x.toString(2);
  // Add n zeros to the end
  let res = bin + "0".repeat(n);
  return parseInt(res, 2);
}

function rightShift(x: number, n: number): number {
  let bin = x.toString(2);
  // Remove n characters from the end
  let res = bin.slice(0, Math.max(0, bin.length - n));
  // If the result is empty, it's 0
  return res === "" ? 0 : parseInt(res, 2);
}

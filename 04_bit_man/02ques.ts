function swaptwonum(x: number, y: number): number[] {
  //   let temp = x;
  //   x = y;
  //   y = temp;

  //   using xor
  x = x ^ y;
  y = x ^ y;
  x = x ^ y;
  return [x, y];
}

// console.log(swaptwonum(3, 5));

function ithbitleft(n: number, i: number): boolean {
  if ((n & (1 << i)) != 0) {
    return true;
  }
  return false;
}

function ithbitright(n: number, i: number): boolean {
  if (((n >> i) & 1) == 0) {
    return false;
  }
  return true;
}

console.log(ithbitright(13, 1));

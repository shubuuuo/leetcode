function myPow(x: number, n: number): number {
  let ans = 1.0;
  let m: bigint = BigInt(n);

  if (m < 0n) {
    m = -m;
    x = 1 / x;
  }

  while (m > 0n) {
    if (m % 2n === 1n) {
      ans = ans * x;
    }

    x = x * x;
    m = m / 2n;
  }

  return ans;
}

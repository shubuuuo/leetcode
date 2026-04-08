function countGoodNumbers(n: number): number {
  const MOD = 1000000007n;

  const bigN = BigInt(n);

  const oddIndices = bigN / 2n;
  const evenIndices = bigN - oddIndices;

  function power(base: bigint, exp: bigint): bigint {
    let res = 1n;
    base = base % MOD;

    while (exp > 0n) {
      if (exp % 2n === 1n) {
        res = (res * base) % MOD;
      }
      base = (base * base) % MOD;
      exp = exp / 2n;
    }
    return res;
  }

  const evens = power(5n, evenIndices);
  const odds = power(4n, oddIndices);

  return Number((evens * odds) % MOD);
}

const M = 1000000007;

function power(base: bigint, exponent: bigint): bigint {
  if (exponent === 0n) {
    return 1n;
  }

  let half = power(base, exponent / 2n);
  let result = (half * half) % BigInt(M);

  if (exponent % 2n === 1n) {
    result = (result * base) % BigInt(M);
  }

  return result;
}

function getMaxDepth(
  adj: Record<number, number[]>,
  node: number,
  parent: number,
): number {
  let depth = 0;

  const neighbors = adj[node] || [];
  for (const ngbr of neighbors) {
    if (ngbr === parent) {
      continue;
    }

    depth = Math.max(depth, getMaxDepth(adj, ngbr, node) + 1);
  }

  return depth;
}

function assignEdgeWeights(edges: number[][]): number {
  const adj: Record<number, number[]> = {};

  for (const edge of edges) {
    const u = edge[0];
    const v = edge[1];

    if (!adj[u]) adj[u] = [];
    if (!adj[v]) adj[v] = [];

    adj[u].push(v);
    adj[v].push(u);
  }

  const d = getMaxDepth(adj, 1, -1);

  return Number(power(2n, BigInt(d - 1)));
}

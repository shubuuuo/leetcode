function findKthPositiveBruteWrong(arr: number[], k: number): number {
  k++;
  for (let i = 1; i <= arr.length; i++) {
    k--;
    for (let j = 0; j < arr.length; j++) {
      console.log("i:", i);
      console.log("k:", k);
      console.log("j:", arr[j]);
      if (i !== arr[j] && k < 0) {
        console.log("Result: ", i);
        return i - 1;
      }
    }
  }

  return 0;
}

function findKthPositiveBrute(arr: number[], k: number): number {
  let missing: number = 0;
  let current: number = 1;

  while (missing < k) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
      if (current == arr[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      missing++;
      if (missing === k) {
        return current;
      }
    }

    current++;
  }

  return -1;
}

function findKthPositiveBruteSet(arr: number[], k: number): number {
  const set = new Set(arr); // O(n) space, O(1) lookup
  let missing = 0;
  let current = 1;

  while (true) {
    if (!set.has(current)) {
      // Not in array = missing
      missing++;
      if (missing === k) {
        return current;
      }
    }
    current++;
  }
}

function findKthPositive(arr: number[], k: number): number {
  for (let i = 0; i < arr.length; i++) {
    let missingBefore = arr[i] - (i + 1);

    if (missingBefore >= k) {
      return k + i;
    }
  }

  return arr.length + k;
}

console.log(findKthPositive([4, 7, 9, 10], 4)); // 5
console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9

console.log(findKthPositiveBrute([4, 7, 9, 10], 4));

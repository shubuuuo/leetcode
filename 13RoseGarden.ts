function possible(arr: number[], day: number, m: number, k: number): boolean {
  let cnt = 0;
  let noOfB = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= day) {
      cnt++;
    } else {
      noOfB += Math.floor(cnt / k);
      cnt = 0;
    }
  }

  noOfB += Math.floor(cnt / k);
  return noOfB >= m;
}

function minDays(bloomDay: number[], m: number, k: number): number {
  if (m * k > bloomDay.length) return -1;

  let mini = Infinity;
  let maxi = -Infinity;

  for (let i = 0; i < bloomDay.length; i++) {
    mini = Math.min(mini, bloomDay[i]);
    maxi = Math.max(maxi, bloomDay[i]);
  }

  let low = mini;
  let high = maxi;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (possible(bloomDay, mid, m, k)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

console.log(minDays([1, 10, 3, 10, 2], 3, 1));

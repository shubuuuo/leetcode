// Watched a Video

// Brute
function shipWithinDaysBrute(weights: number[], days: number): number {
  for (
    let capacity = 0;
    capacity <= Math.max(...weights) - summition(weights);
    capacity++
  ) {
    let daysReq = findDays(weights, capacity);
    if (daysReq <= days) {
      return daysReq;
    }
  }
  return 0;
}

// Optimized
function shipWithinDays(weights: number[], days: number): number {
  let low: number = Math.max(...weights);
  let high: number = summition(weights);

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);
    let noOfDays: number = findDays(weights, mid);

    if (noOfDays <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

function summition(weights: number[]): number {
  let sum: number = 0;
  for (let index = 0; index < weights.length; index++) {
    sum += weights[index];
  }
  return sum;
}

function findDays(weights: number[], capacity: number): number {
  let days: number = 1;
  let load: number = 0;

  for (let i = 0; i < weights.length; i++) {
    if (load + weights[i] > capacity) {
      days = days + 1;
      load = weights[i];
    } else {
      load += weights[i];
    }
  }
  return days;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

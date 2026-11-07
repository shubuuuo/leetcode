class Heap {
  private d: number[][] = [];
  constructor(private less: (a: number[], b: number[]) => boolean) {}

  size(): number {
    return this.d.length;
  }

  top(): number[] {
    return this.d[0];
  }

  push(x: number[]): void {
    this.d.push(x);
    let i = this.d.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!this.less(this.d[i], this.d[p])) break;
      [this.d[i], this.d[p]] = [this.d[p], this.d[i]];
      i = p;
    }
  }

  pop(): number[] {
    const res = this.d[0];
    const last = this.d.pop()!;
    if (this.d.length > 0) {
      this.d[0] = last;
      let i = 0;
      const n = this.d.length;
      while (true) {
        let m = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        if (l < n && this.less(this.d[l], this.d[m])) m = l;
        if (r < n && this.less(this.d[r], this.d[m])) m = r;
        if (m === i) break;
        [this.d[i], this.d[m]] = [this.d[m], this.d[i]];
        i = m;
      }
    }
    return res;
  }
}

function assignTasks(servers: number[], tasks: number[]): number[] {
  const free = new Heap((a, b) => (a[0] !== b[0] ? a[0] < b[0] : a[1] < b[1]));
  const busy = new Heap((a, b) => {
    if (a[0] !== b[0]) return a[0] < b[0];
    if (a[1] !== b[1]) return a[1] < b[1];
    return a[2] < b[2];
  });

  for (let i = 0; i < servers.length; i++) free.push([servers[i], i]);

  const ans: number[] = [];
  let t = 0;

  for (let j = 0; j < tasks.length; j++) {
    t = Math.max(t, j);

    if (free.size() === 0) t = Math.max(t, busy.top()[0]);

    while (busy.size() > 0 && busy.top()[0] <= t) {
      const [, w, idx] = busy.pop();
      free.push([w, idx]);
    }

    const [w, idx] = free.pop();
    ans.push(idx);
    busy.push([t + tasks[j], w, idx]);
  }

  return ans;
}

/*
A1:
    - 
*/

/*
1882. Process Tasks Using Servers
Medium
Topics
premium lock icon
Companies
Hint
You are given two 0-indexed integer arrays servers and tasks of lengths n​​​​​​ and m​​​​​​ respectively. servers[i] is the weight of the i​​​​​​th​​​​ server, and tasks[j] is the time needed to process the j​​​​​​th​​​​ task in seconds.

Tasks are assigned to the servers using a task queue. Initially, all servers are free, and the queue is empty.

At second j, the jth task is inserted into the queue (starting with the 0th task being inserted at second 0). As long as there are free servers and the queue is not empty, the task in the front of the queue will be assigned to a free server with the smallest weight, and in case of a tie, it is assigned to a free server with the smallest index.

If there are no free servers and the queue is not empty, we wait until a server becomes free and immediately assign the next task. If multiple servers become free at the same time, then multiple tasks from the queue will be assigned in order of insertion following the weight and index priorities above.

A server that is assigned task j at second t will be free again at second t + tasks[j].

Build an array ans​​​​ of length m, where ans[j] is the index of the server the j​​​​​​th task will be assigned to.

Return the array ans​​​​.

 

Example 1:

Input: servers = [3,3,2], tasks = [1,2,3,2,1,2]
Output: [2,2,0,2,1,2]
Explanation: Events in chronological order go as follows:
- At second 0, task 0 is added and processed using server 2 until second 1.
- At second 1, server 2 becomes free. Task 1 is added and processed using server 2 until second 3.
- At second 2, task 2 is added and processed using server 0 until second 5.
- At second 3, server 2 becomes free. Task 3 is added and processed using server 2 until second 5.
- At second 4, task 4 is added and processed using server 1 until second 5.
- At second 5, all servers become free. Task 5 is added and processed using server 2 until second 7.
Example 2:

Input: servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]
Output: [1,4,1,4,1,3,2]
Explanation: Events in chronological order go as follows: 
- At second 0, task 0 is added and processed using server 1 until second 2.
- At second 1, task 1 is added and processed using server 4 until second 2.
- At second 2, servers 1 and 4 become free. Task 2 is added and processed using server 1 until second 4. 
- At second 3, task 3 is added and processed using server 4 until second 7.
- At second 4, server 1 becomes free. Task 4 is added and processed using server 1 until second 9. 
- At second 5, task 5 is added and processed using server 3 until second 7.
- At second 6, task 6 is added and processed using server 2 until second 7.
 

Constraints:

servers.length == n
tasks.length == m
1 <= n, m <= 2 * 105
1 <= servers[i], tasks[j] <= 2 * 105
 
Seen this question in a real interview before?
1/6
Yes
No
Accepted
90,684/179.9K
Acceptance Rate
50.4%
Topics
Staff
Array
Heap (Priority Queue)
Weekly Contest 243
icon
Companies
Hint 1
You can maintain a Heap of available Servers and a Heap of unavailable servers
Hint 2
Note that the tasks will be processed in the input order so you just need to find the x-th server that will be available according to the rules

*/

//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// TC -> O(N * 2 * log(N))
// SC -> O(N)
function getlengthBrute(head: ListNode | null): number | undefined {
  const nodeMap: Map<ListNode, number> = new Map();
  let temp = head;
  let timer = 1;

  while (temp !== null) {
    if (nodeMap.get(temp)) {
      let value = nodeMap.get(temp);
      if (value !== undefined) {
        return timer - value;
      }
    }

    nodeMap.set(temp, timer);
    timer++;
    temp = temp.next;
  }
  return 0;
}

function getlength(head: ListNode | null): number {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return findLength(slow, fast);
    }
  }
  return 0;
}

function findLength(slow: ListNode | null, fast: ListNode | null) {
  let cnt = 1;
  fast = fast!.next;

  while (slow !== fast) {
    cnt++;
    fast = fast!.next;
  }
  return cnt;
}

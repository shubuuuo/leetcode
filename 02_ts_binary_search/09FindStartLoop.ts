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
function detectCycleBrute(head: ListNode | null): ListNode | null {
  const nodeMap: Map<ListNode, number> = new Map();
  let temp = head;

  while (temp !== null) {
    if (nodeMap.get(temp)) {
      return temp;
    }

    nodeMap.set(temp, 1);
    temp = temp.next;
  }
  return null;
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      let entry: ListNode | null = head;

      while (entry !== slow) {
        entry = entry!.next;
        slow = slow!.next;
      }
      return entry;
    }
  }
  return null;
}

function detectCycleAnother(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow == fast) {
      return getFirst(head, fast);
    }
  }
  return null;
}

function getFirst(
  head: ListNode | null,
  fast: ListNode | null,
): ListNode | null {
  let slow = head;

  while (slow !== null) {
    slow.next;
    fast!.next;

    if (slow == fast) {
      return slow;
    }
  }

  return null;
}

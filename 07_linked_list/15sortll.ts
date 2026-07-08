/**
 * Definition for singly-linked list.
 **/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  // Get total length of the list
  let length = 0;
  let curr: ListNode | null = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  const dummy = new ListNode(0, head);

  // Iteratively merge sublists of doubling sizes: 1, 2, 4, 8...
  for (let width = 1; width < length; width *= 2) {
    let prev = dummy;
    curr = dummy.next;

    while (curr) {
      let left = curr;
      let right = split(left, width);
      curr = split(right, width); // Next 'left' starts after 'right'
      prev.next = merge(left, right);

      // Move prev to the end of the newly merged segment
      while (prev.next) prev = prev.next;
    }
  }

  return dummy.next;
}

// Splits the list into two: the first part of size `n`,
// and returns the start of the remaining list.
function split(head: ListNode | null, n: number): ListNode | null {
  for (let i = 1; head && i < n; i++) head = head.next;
  if (!head) return null;
  let second = head.next;
  head.next = null;
  return second;
}

// Standard merge function for two sorted lists
function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 || l2;
  return dummy.next;
}

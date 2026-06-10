class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast!.next;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow!.next;
  }

  slow!.next = slow!.next!.next;

  return dummy.next;
}

function removeNthFromEndWrong(
  head: ListNode | null,
  n: number,
): ListNode | null {
  if (head == null) {
    return head;
  }
  if (n == 1) {
    head = head.next;
    return head;
  }
  let temp: ListNode | null = head;
  let prev: ListNode | null = temp;

  for (let i = ListNode.length; i >= 0; i--) {
    if (i === n) {
      prev.next = prev.next.next;
      break;
    }
    prev = temp;
    temp = temp.next;
  }

  return head;
}

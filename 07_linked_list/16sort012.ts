class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Sorting Logic (One-Pass)

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  // Create dummy heads for 0, 1, and 2 lists
  const zeroHead = new ListNode(-1);
  const oneHead = new ListNode(-1);
  const twoHead = new ListNode(-1);

  let zero = zeroHead;
  let one = oneHead;
  let two = twoHead;

  let temp: ListNode | null = head;

  while (temp !== null) {
    if (temp.val === 0) {
      zero.next = temp;
      zero = zero.next;
    } else if (temp.val === 1) {
      one.next = temp;
      one = one.next;
    } else {
      two.next = temp;
      two = two.next;
    }
    temp = temp.next;
  }

  // Connect the lists: 0 -> 1 -> 2
  zero.next = oneHead.next !== null ? oneHead.next : twoHead.next;
  one.next = twoHead.next;
  two.next = null;

  const newHead = zeroHead.next;
  return newHead;
}

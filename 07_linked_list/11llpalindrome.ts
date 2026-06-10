//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class Stacktwo<T> {
  private items: T[] = [];

  constructor() {}

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  top(): T | undefined {
    return this.items.length > 0
      ? this.items[this.items.length - 1]
      : undefined;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// TC -> O(2N)
// SC -> O(N)
function isPalindromeBrute(head: ListNode | null): boolean {
  let st = new Stacktwo<number>();
  let temp = head;

  while (temp !== null) {
    st.push(temp.val);
    temp = temp.next;
  }

  temp = head;

  while (temp !== null) {
    if (temp.val !== st.top()) {
      return false;
    }
    temp = temp.next;
    st.pop();
  }
  return true;
}

function isPalindromeReverse(head: ListNode | null): boolean {
  let temp: ListNode | null = head;
  let prev: ListNode | null = null;

  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  //   prev is the reversed head

  if (head?.val == prev?.val) {
    return true;
  }
  return false;
}

function isPalindromeWrong(head: ListNode | null): boolean {
  let temp: ListNode | null = head;
  let prev: ListNode | null = null;

  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  //   prev is the reversed head

  if (head?.val == prev?.val) {
    return true;
  }
  return false;
}

// TC -> O(2N)
// SC -> O(1)
function isPalindrome(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast?.next !== null && fast?.next.next !== null) {
    slow = slow!.next;
    fast = fast!.next.next;
  }

  let newHead: ListNode | null = reverseLLOptimalIterative(slow!.next);

  let first = head;
  let second = newHead;

  while (second !== null) {
    if (first?.val !== second.val) {
      reverseLLOptimalIterative(newHead);
      return false;
    }
    first = first.next;
    second = second.next;
  }

  reverseLLOptimalIterative(newHead);

  return true;
}

function reverseLLOptimalIterative(head: ListNode | null) {
  let temp: ListNode | null = head;
  let prev: ListNode | null = null;

  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

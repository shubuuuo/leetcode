class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Stack using LinkedList
class ST {
  top: ListNode | null = null;
  size = 0;

  push(x: number) {
    let temp = new ListNode(x);
    temp.next = this.top;
    this.top = temp;
    this.size = this.size + 1;
  }

  pop() {
    let temp = this.top;
    this.top = this.top?.next ?? null;
    this.size = this.size - 1;
  }

  front() {
    return this.top?.val;
  }
}

// Impletement Queue using Linked List
class Q {
  start: ListNode | null = null;
  end: ListNode | null = null;
  size = 0;

  push(x: number) {
    let temp = new ListNode(x);
    if (this.start == null) {
      this.start = this.end = temp;
    } else {
      if (this.end) {
        this.end.next = temp;
      }
      this.end = temp;
    }
    this.size = this.size + 1;
  }

  pop() {
    if (this.start == null) {
      return;
    }
    this.start = this.start?.next ?? null;
    this.size = this.size - 1;
  }

  front() {
    if (this.start == null) {
      return;
    }
    return this.start?.val;
  }
}

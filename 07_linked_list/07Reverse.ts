class LinkedListNodeTwo {
  data: number;
  next: LinkedListNodeTwo | null;

  // Overload signatures (just declarations)
  constructor(data: number);
  constructor(data: number, next: LinkedListNodeTwo | null);

  // Implementation (must handle all cases)
  constructor(data: number, next: LinkedListNodeTwo | null = null) {
    this.data = data;
    this.next = null;
  }
}

// We cannot return the entire Linked List so we return the head.
function convertArr2LL(array: number[]) {
  // Never ever tamper with the head, because if the head moves then ll moves
  const head = new LinkedListNodeTwo(array[0]);
  let mover = head;
  // i = 1 because else it will create an infinite loop and will create duplicates of the head
  for (let i = 1; i < array.length; i++) {
    const temp = new LinkedListNodeTwo(array[i]);
    mover.next = temp;
    mover = temp;
  }
  return head;
}

function TravelsalOfLL(): number[] {
  const head = convertArr2LL(array);
  let result: number[] = [];
  // console.log(head.data);
  let temp: LinkedListNodeTwo | null = head;
  while (temp != null) {
    // console.log(temp.data + " ");
    // temp.data = result[]; use push instead of just assigning
    result.push(temp.data);
    temp = temp.next;
  }
  return result;
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

function reverseLLBrute(head: LinkedListNodeTwo | null) {
  if (head === null || head.next === null) {
    return head;
  }

  let st = new Stacktwo<number>();

  let temp: LinkedListNodeTwo | null = head;

  while (temp !== null) {
    st.push(temp.data);
    temp = temp.next;
  }

  // reset
  temp = head;

  while (temp !== null) {
    const value = st.top();

    if (value === undefined) {
      break;
    }

    temp.data = value;

    st.pop();
    temp = temp.next;
  }

  return head;
}
// TC -> O(2N), SC -> O(N)

function reverseLLOptimalIterative(head: LinkedListNodeTwo | null) {
  let temp: LinkedListNodeTwo | null = head;
  let prev: LinkedListNodeTwo | null = null;

  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

function reverseLLOptimalRecursive(
  head: LinkedListNodeTwo | null,
): LinkedListNodeTwo | null {
  if (head === null || head.next === null) {
    return head;
  }

  let newhead: LinkedListNodeTwo | null = reverseLLOptimalRecursive(head.next);
  let front: LinkedListNodeTwo | null = head.next;
  front.next = head;
  head.next = null;
  return newhead;
}

const array: number[] = [12, 5, 8, 7];

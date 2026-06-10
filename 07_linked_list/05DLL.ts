class DoublyLinkedListInitial {
  data: number;
  next: DoublyLinkedListInitial | null;
  back: DoublyLinkedListInitial | null;

  // Overload signatures (just declarations)
  constructor(data: number);
  constructor(data: number, next: DoublyLinkedListInitial | null);
  constructor(
    data: number,
    next: DoublyLinkedListInitial | null,
    back: DoublyLinkedListInitial | null,
  );

  // Implementation (must handle all cases)
  constructor(
    data: number,
    next: DoublyLinkedListInitial | null = null,
    back: DoublyLinkedListInitial | null = null,
  ) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

class Stack<T> {
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

function convertArrayToDLL(arrayDD: number[]) {
  const head = new DoublyLinkedListInitial(arrayDD[0]);
  let prev: DoublyLinkedListInitial = head;
  for (let i = 1; i < arrayDD.length; i++) {
    const temp = new DoublyLinkedListInitial(arrayDD[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
}

function printDLL(head: DoublyLinkedListInitial | null) {
  while (head !== null) {
    console.log(head.data + " ");
    head = head.next;
  }
}

function deleteHead(head: DoublyLinkedListInitial | null) {
  if (head === null || head.next === null) {
    return null;
  }

  let prev: DoublyLinkedListInitial | null = head;
  head = head.next;

  head.back = null;
  prev.next = null;

  return head;
}

function deleteTail(head: DoublyLinkedListInitial | null) {
  if (head === null || head.next === null) {
    return null;
  }

  let tail: DoublyLinkedListInitial | null = head;
  let prev: DoublyLinkedListInitial | null = head;

  while (tail.next !== null) {
    tail = tail.next;
  }

  prev = tail.back;
  // prev.next = null;
  tail.back = null;
  prev!.next = null;

  return head;
}

function deleteKthDLL(head: DoublyLinkedListInitial | null, k: number) {
  if (head === null) {
    return null;
  }
  let temp: DoublyLinkedListInitial | null = head;
  let count: number = 0;

  while (temp !== null) {
    count++;
    if (count === k) {
      break;
    }
    temp = temp.next;
  }

  if (temp === null) {
    return head;
  }

  let prev = temp.back;
  let front = temp.next;

  if (prev === null && front === null) {
    return null;
  }
  if (prev === null) {
    return deleteHead(head);
  }
  if (front === null) {
    return deleteTail(head);
  }

  prev.next = front;
  front.back = prev;

  temp.next = null;
  temp.back = null;

  return head;
}

function reverseBrute(head: DoublyLinkedListInitial | null) {
  if (head === null || head.next === null) {
    return head;
  }

  let st = new Stack<number>();

  let temp: DoublyLinkedListInitial | null = head;

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

function reverseOptimal(head: DoublyLinkedListInitial | null) {
  if (head === null || head.next === null) {
    return head;
  }

  let current: DoublyLinkedListInitial | null = head;

  while (current !== null) {
    let temp: DoublyLinkedListInitial | null = current.next;

    current.next = current.back;
    current.back = temp;

    head = current;
    current = temp;
  }

  return head;
}

// You cannot delete the head, you can delete everything else, because if you delete the head, then the head will be moved and you do not want it. This function is designed to delete a node when you don’t have access to the head pointer, so you cannot update it.

function deleteNodeDLL(temp: DoublyLinkedListInitial | null) {
  // What if that node is the last node? prev <- node -> front, ijn this last node, the fornt will be empty, then we will have to take thet edge case.

  if (temp === null) {
    return;
  }
  // ! = I am assuring that temp will never be null
  let prev = temp.back;
  let front = temp.next;

  if (prev === null) {
    return;
  }

  if (front === null) {
    // I cannot delete head so previous cannot be null
    prev.next = null;
    temp.back = null;

    return;
  }

  prev.next = front;
  front.back = prev;

  temp.next = null;
  temp.back = null;
}

function insertBeforeHead(head: DoublyLinkedListInitial, val: number) {
  let newHead = new DoublyLinkedListInitial(val, head, null);

  head.back = newHead;

  return newHead;
}

function insertAfterHead(head: DoublyLinkedListInitial, val: number) {
  let front = head.next;
  let newHead = new DoublyLinkedListInitial(val, head.next, head);

  head.next = newHead;

  if (front !== null) {
    front.back = newHead;
  }

  return head;
}

function insertBeforeTail(head: DoublyLinkedListInitial | null, val: number) {
  if (head === null) {
    return new DoublyLinkedListInitial(val, null, null);
  }

  if (head.next === null) {
    // let newNode = new DoublyLinkedListInitial(val, head, null);

    // head.back = newNode;

    // return newNode;

    return insertBeforeHead(head, val);
  }

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  let prev = temp.back;

  let newNode = new DoublyLinkedListInitial(val, temp, prev);
  prev!.next = newNode;
  temp.back = newNode;

  return head;
}

function insertAfterTail(head: DoublyLinkedListInitial | null, val: number) {
  if (head === null) {
    return new DoublyLinkedListInitial(val, null, null);
  }

  if (head.next === null) {
    return insertAfterHead(head, val);
  }

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }

  let newNode = new DoublyLinkedListInitial(val, null, temp);
  temp.next = newNode;

  return head;
}

function insertBeforeKthEl(
  head: DoublyLinkedListInitial | null,
  val: number,
  k: number,
) {
  if (head === null) {
    return new DoublyLinkedListInitial(val, null, null);
  }

  let count: number = 0;
  let temp: DoublyLinkedListInitial | null = head;

  while (temp !== null) {
    count++;
    if (count === k) {
      break;
    }
    temp = temp.next;
  }

  if (temp === null) {
    return head;
  }

  let prev = temp.back;
  let front = temp.next;

  if (prev === null && front === null) {
    return null;
  }
  if (prev === null) {
    return insertBeforeHead(head, val);
  }
  if (front === null) {
    return insertBeforeTail(head, val);
  }

  let newNode = new DoublyLinkedListInitial(val, temp, prev);
  prev.next = newNode;
  temp.back = newNode;

  return head;
}

function insertBeforeNode(temp: DoublyLinkedListInitial, val: number) {
  let prev = temp.back;
  let newNode = new DoublyLinkedListInitial(val, temp, prev);

  if (prev !== null) {
    prev.next = newNode;
  } else {
    head = newNode;
  }

  temp.back = newNode;
  return head;
}

const arrayDD: number[] = [12, 5, 8, 7];
let head: DoublyLinkedListInitial | null = convertArrayToDLL(arrayDD);

// console.log(printDLL(head));
// head = deleteHead(head);
// head = deleteTail(head);
// head = deleteKthDLL(head, 3);
// deleteNodeDLL(head.next);
// head = insertBeforeHead(head, 4);
// head = insertAfterHead(head, 7);
// head = insertBeforeTail(head, 7);
// head = insertAfterTail(head, 87);
// head = insertBeforeKthEl(head, 76, 3);
// head = insertBeforeNode(head.next!.next!, 100);
// head = reverseBrute(head);
head = reverseOptimal(head);
printDLL(head);

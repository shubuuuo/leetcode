class LinkedListNodeIns {
  data: number;
  next: LinkedListNodeIns | null;

  constructor(data: number, next: LinkedListNodeIns | null = null) {
    this.data = data;
    this.next = next;
  }
}

// Print Linked List
function printList(head: LinkedListNodeIns | null): void {
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

// Insert at Head
function insertHead(
  head: LinkedListNodeIns | null,
  val: number,
): LinkedListNodeIns {
  let temp: LinkedListNodeIns = new LinkedListNodeIns(val, head);
  return temp;
}

// Insert at Tail
function insertTail(
  head: LinkedListNodeIns | null,
  val: number,
): LinkedListNodeIns {
  if (head === null) {
    return new LinkedListNodeIns(val);
  }

  let temp: LinkedListNodeIns = head;

  while (temp.next !== null) {
    temp = temp.next;
  }

  let newNode: LinkedListNodeIns = new LinkedListNodeIns(val);
  temp.next = newNode;

  return head;
}

function InsertAtK(
  head: LinkedListNodeIns | null,
  val: number,
  k: number,
): LinkedListNodeIns | null {
  if (head === null) {
    if (k === 1) {
      return new LinkedListNodeIns(val);
    } else {
      return null;
    }
  }

  if (k === 1) {
    let temp: LinkedListNodeIns = new LinkedListNodeIns(val, head);
    return temp;
  }

  let cnt: number = 0;
  let temp: LinkedListNodeIns | null = head;

  while (temp !== null) {
    cnt++;

    if (cnt === k - 1) {
      let newNode: LinkedListNodeIns = new LinkedListNodeIns(val, temp.next);

      //   newNode.next = temp.next;
      temp.next = newNode;
      break;
    }

    temp = temp.next;
  }

  return head;
}

function insertAtValue(
  head: LinkedListNodeIns | null,
  val: number,
  place: number,
): LinkedListNodeIns | null {
  if (head === null) {
    return null;
  }

  if (head.data === place) {
    return new LinkedListNodeIns(val, head);
  }

  let temp: LinkedListNodeIns | null = head;
  while (temp.next !== null) {
    // temp.next.data for returning before the targetvalue
    // temp.data for returning after the targetvalue
    if (temp.next.data === place) {
      let newNode: LinkedListNodeIns = new LinkedListNodeIns(val, temp.next);
      temp.next = newNode;
      break;
    }
    temp = temp.next;
  }

  return head;
}

// Convert Array to Linked List
function convertArrToLL(array: number[]): LinkedListNodeIns | null {
  if (array.length === 0) return null;

  const head = new LinkedListNodeIns(array[0]);
  let mover = head;

  for (let i = 1; i < array.length; i++) {
    mover.next = new LinkedListNodeIns(array[i]);
    mover = mover.next;
  }

  return head;
}

// ----------------------------
// Main Execution
// ----------------------------

const arr: number[] = [3, 5, 6, 7];

// Build Linked List from Array
let head = convertArrToLL(arr);

console.log("Original list:");
printList(head);

// Insert new head node
// head = insertTail(head, 100);

// // Insert at K place
// head = InsertAtK(head, 8, 2);
// head = InsertAtK(head, 90, 2);
// head = InsertAtK(head, 90, 1);

// Insert by value
head = insertAtValue(head, 988, 5);

console.log("\nAfter inserting at head:");
printList(head);

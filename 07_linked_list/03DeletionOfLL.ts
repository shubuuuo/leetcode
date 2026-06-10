class LinkedListNodeThree {
  data: number;
  next: LinkedListNodeThree | null;

  constructor(data: number, next: LinkedListNodeThree | null = null) {
    this.data = data;
    this.next = next;
  }
}

function printList(head: LinkedListNodeThree | null): void {
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

function removeHead(
  head: LinkedListNodeThree | null,
): LinkedListNodeThree | null {
  return head ? head.next : null;
}

function deleteTail(
  head: LinkedListNodeThree | null,
): LinkedListNodeThree | null {
  if (head === null || head.next === null) {
    return null;
  }

  let current = head;

  while (current.next?.next !== null) {
    current = current.next;
  }

  current.next = null;
  return head;
}

function removeK(
  head: LinkedListNodeThree | null,
  k: number,
): LinkedListNodeThree | null {
  if (head == null) {
    return head;
  }
  if (k == 1) {
    let temp: LinkedListNodeThree = head;
    head = head.next;
    return head;
  }
  let cnt: number = 0;
  let temp: LinkedListNodeThree = head;
  let prev: LinkedListNodeThree = null;

  while (temp !== null) {
    cnt++;
    if (cnt === k) {
      prev.next = prev.next?.next;
      break;
    }
    prev = temp;
    temp = temp.next;
  }
  return head;
}

function removeEl(
  head: LinkedListNodeThree | null,
  el: number,
): LinkedListNodeThree | null {
  if (head == null) {
    return head;
  }
  if (head.data == el) {
    let temp: LinkedListNodeThree = head;
    head = head.next;
    return head;
  }
  let temp: LinkedListNodeThree = head;
  let prev: LinkedListNodeThree = null;

  while (temp !== null) {
    if (temp.data == el) {
      prev.next = prev.next?.next;
      break;
    }
    prev = temp;
    temp = temp.next;
  }
  return head;
}

// Create the linked list: 3 -> 5 -> 6 -> 7
const arr: number[] = [3, 5, 6, 7];

let head: LinkedListNodeThree | null = new LinkedListNodeThree(arr[0]);
let current = head;

for (let i = 1; i < arr.length; i++) {
  current.next = new LinkedListNodeThree(arr[i]);
  current = current.next;
}

console.log("Original list:");
printList(head);

// head = deleteTail(head);
head = removeEl(head, 5);

console.log("\nAfter removing tail:");
printList(head);

// One simple way is this, but it can get messy.
// Simple Node isn't working... Therefore LinkedListNode
class LinkedListNode {
  data: number;
  next: LinkedListNode | null;
  // next: LinkedListNode;

  // One constructor handles both the cases
  // TS doesn't allow multiple constructors like c++ and java
  constructor(data: number, next: LinkedListNode | null = null) {
    this.data = data;
    this.next = next;
  }

  // constructortwo(data: number) {
  //   this.data = data;
  //   this.next = null;
  // }
}

// More efficient way
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

const array: number[] = [12, 5, 8, 7];

const y = new LinkedListNode(array[0], null);
const newNode = new LinkedListNode(array[0]);
// console.log(newNode.data);
// console.log(y.data);

const x = new LinkedListNodeTwo(array[0], null);
const xzz = new LinkedListNodeTwo(array[0]);
// console.log(x.data);
// console.log(xzz.data);

// We cannot return the entire Linked List so we return the head.
function convertArr2LL(array: number[]) {
  // Never ever tamper with the head, because if the head moves then ll moves
  const head = new LinkedListNode(array[0]);
  let mover = head;
  // i = 1 because else it will create an infinite loop and will create duplicates of the head
  for (let i = 1; i < array.length; i++) {
    const temp = new LinkedListNode(array[i]);
    mover.next = temp;
    mover = temp;
  }
  return head;
}

function TravelsalOfLL(): number[] {
  const head = convertArr2LL(array);
  let result: number[] = [];
  // console.log(head.data);
  let temp = head;
  while (temp != null) {
    // console.log(temp.data + " ");
    // temp.data = result[]; use push instead of just assigning
    result.push(temp.data);
    temp = temp.next;
  }
  return result;
}

function lengthOfNode(): number {
  const head = convertArr2LL(array);
  let length: number = 0;
  let temp = head;
  // always apply the traversal
  while (temp != null) {
    temp = temp.next;
    length++;
  }
  return length;
}

function checkIfPresent(value: number): number {
  const head = convertArr2LL(array);
  let temp = head;

  while (temp) {
    if (temp.data == value) return 1;
    temp = temp.next;
  }
  return 0;
}
console.log(checkIfPresent(5));

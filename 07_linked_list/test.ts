class DoubleLL {
  data: number;
  next: DoubleLL | null;
  prev: DoubleLL | null;

  constructor(data: number);
  constructor(data: number, next: DoubleLL | null);
  constructor(data: number, next: DoubleLL | null, prev: DoubleLL | null);

  constructor(
    data: number,
    next: DoubleLL | null = null,
    prev: DoubleLL | null = null,
  ) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

function convertArrayToDoLL(arraythree: number[]) {
  const head: DoubleLL | null = new DoubleLL(arraythree[0]);
  let prev: DoubleLL | null = head;

  for (let i = 1; i < arraythree.length; i++) {
    let temp: DoubleLL | null = new DoubleLL(arraythree[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
}

function printDLLP(head: DoubleLL | null) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}

let arraythree: number[] = [5, 4, 6, 7];

let head: DoubleLL | null = convertArrayToDoLL(arraythree);
printDLLP(head);

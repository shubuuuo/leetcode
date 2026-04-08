class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenListwrong(head: ListNode | null): ListNode | null {
  const nodeStatus = new Map<ListNode, boolean>();
  let temp = head;

  while (temp !== null) {
    const satisfies = temp.val % 2 === 0;
    if (satisfies) {
      nodeStatus.set(temp, satisfies);
      temp = temp.next;
    }
  }

  while (temp !== null) {
    const satisfies = temp.val % 2 === 0;
    if (!satisfies) {
      nodeStatus.set(temp, satisfies);
      temp = temp.next;
    }
  }

  return nodeStatus;
}

// Rearrange Even and Odd LIst
function oddEvenListAnother(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const nodeStatus = new Map<ListNode, boolean>();
  let curr: ListNode | null = head;

  while (curr) {
    nodeStatus.set(curr, curr.val % 2 === 0);
    curr = curr.next;
  }

  let evenDummy = new ListNode(0);
  let oddDummy = new ListNode(0);

  let evenTail = evenDummy;
  let oddTail = oddDummy;

  curr = head;
  while (curr) {
    if (nodeStatus.get(curr)) {
      evenTail.next = curr;
      evenTail = evenTail.next;
    } else {
      oddTail.next = curr;
      oddTail = oddTail.next;
    }
    curr = curr.next;
  }

  oddTail.next = null;
  evenTail.next = oddDummy.next;

  return evenDummy.next;
}

// Get only nodes which is divisible by 4
function divByFour(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const nodeStatus = new Map<ListNode, boolean>();
  let curr: ListNode | null = head;

  while (curr) {
    nodeStatus.set(curr, curr.val % 4 === 0);
    curr = curr.next;
  }

  let dummyNode = new ListNode(0);

  let tailDummy = dummyNode;

  curr = head;
  while (curr) {
    if (nodeStatus.get(curr)) {
      tailDummy.next = curr;
      tailDummy = tailDummy.next;
    }
    curr = curr.next;
  }

  tailDummy.next = null;

  return dummyNode.next;
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let odd = head;
  let even: ListNode | null = head.next;
  const evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}

// --- 1. THE TOOLS ---

// Helper function to print the list: [1 -> 2 -> 3 -> null]
function printList(head: ListNode | null): void {
  let curr = head;
  let result: number[] = [];
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  console.log(result.join(" -> ") + " -> null");
}

// Helper function to create a list from an array
function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

// --- 2. RUNNING THE TEST ---

// Create a dummy list: 1 -> 2 -> 3 -> 4 -> 5 -> 8 -> 12
const myNumbers = [1, 2, 3, 4, 5, 8, 12];
const head = arrayToList(myNumbers);

console.log("Original List:");
printList(head);

// Test 1: oddEvenList (Evens first, then Odds)
console.log("\n--- Testing oddEvenList ---");
const rearranged = oddEvenList(arrayToList(myNumbers)); // Use a fresh list copy
printList(rearranged);
// Expected: 2 -> 4 -> 8 -> 12 -> 1 -> 3 -> 5 -> null

// Test 2: divByFour (Only nodes divisible by 4)
console.log("\n--- Testing divByFour ---");
const filtered = divByFour(arrayToList(myNumbers)); // Use a fresh list copy
printList(filtered);
// Expected: 4 -> 8 -> 12 -> null

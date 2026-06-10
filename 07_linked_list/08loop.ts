/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycletwo(head: ListNode | null): boolean {
  if (head === null || head.next === null || head.next.next === null) {
    return false;
  }

  let prev: ListNode | null = head;

  while (prev !== null) {
    let temp: ListNode | null = head;
    while (temp !== null) {
      if (temp.next === prev) {
        return true;
      }
      temp = temp.next;
    }
    prev = prev.next;
  }

  return false;
}

function hasCycleInefficaent(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
// TC -> O(N)
// SC -> O(1)

function hasCycleOptimal(head: ListNode | null): boolean {
  let mapST = new Map<ListNode, number>();
  let temp = head;

  while (temp !== null) {
    if (mapST(temp) === true) {
      return true;
    }
    mapST[temp] = 1;
    mapST.put([temp, 1]);
    temp = temp.next;
  }

  return false;
}

function hasCycleAgain(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

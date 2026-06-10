/**
 * Definition for singly-linked list.
 *
 **/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let length: number = 0;
  let temp: ListNode | null = head;
  let count: number = 0;

  while (temp != null) {
    temp = temp.next;
    length++;
  }

  //   while (count !== Math.floor(length / 2)) {
  //     temp = temp!.next;
  //     count++;
  //   }

  let mid = Math.floor(length / 2);

  temp = head;

  for (let i = 0; i < mid; i++) {
    temp = temp!.next;
  }

  return temp;
}

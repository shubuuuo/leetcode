//  Problem Statement: You are given a stack of integers. Your task is to reverse the stack using recursion. You may only use standard stack operations (push, pop, top/peek, isEmpty). You are not allowed to use any loop constructs or additional data structures like arrays or queues.

// My approach: Stack is LIFO, So, to reverse the contents in stack, we have two options, first to use an extra space then removing elements and putting again in reverse order. Second is swapping two elements with each other... But the question is that, is it possible in stack DS?

class Stack {
  private items: number[] = [];

  push(val: number): void {
    this.items.push(val);
  }

  pop(): number | undefined {
    return this.items.pop();
  }

  peek(): number | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  print(): void {
    console.log(this.items);
  }
}

// Main function: Reverse the stack
function reverseStack(stack: Stack): void {
  // Base case: if stack is empty, stop
  if (stack.isEmpty()) {
    return;
  }

  // Step 1: Remove top element
  const topElement = stack.pop()!;

  // Step 2: Recursively reverse remaining stack
  reverseStack(stack);

  // Step 3: Insert the removed element at the bottom
  insertAtBottom(stack, topElement);
}

// Helper function: Insert element at bottom of stack
function insertAtBottom(stack: Stack, element: number): void {
  // Base case: if stack is empty, push the element
  if (stack.isEmpty()) {
    stack.push(element);
    return;
  }

  // Step 1: Remove top element temporarily
  const topElement = stack.pop()!;

  // Step 2: Recursively insert 'element' at bottom
  insertAtBottom(stack, element);

  // Step 3: Push back the temporarily removed element
  stack.push(topElement);
}

// Test
const stack = new Stack();
[4, 1, 3, 2].forEach((x) => stack.push(x));
console.log("Before reverse:");
stack.print(); // [4, 1, 3, 2]

reverseStack(stack);
console.log("After reverse:");
stack.print(); // [2, 3, 1, 4]

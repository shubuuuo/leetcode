// No loop based sorting methods allowed, only resurion
function sortwrong(arr: number[]): number[] {
  let greatest = arr[0];
  let result: number[] = [];

  if (arr.length === 1) {
    result.concat(...arr);
  }

  if (arr[1] > greatest) {
    arr.slice(0, 0);
    sortwrong(arr);
  }

  return result;
}

class Stack<T> {
  private items: T[] = [];

  // Adds an element to the top
  push(item: T): void {
    this.items.push(item);
  }

  // Removes and returns the top element
  pop(): T | undefined {
    return this.items.pop();
  }

  // Views the top element without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Checks if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Returns the total count of elements
  size(): number {
    return this.items.length;
  }

  // Clears all elements from the stack
  clear(): void {
    this.items = [];
  }
}

function insert(arr: Stack<number>, temp: number) {
  let another = arr.peek();
  if (another !== undefined) {
    if (arr.isEmpty() || another <= temp) {
      arr.push(temp);
      return;
    }
  }

  let val = arr.peek();
  arr.pop();
  insert(arr, temp);

  if (val !== undefined) {
    arr.push(val);
  }
}

function sortStack(s: Stack<number>) {
  if (!s.isEmpty) {
    let temp = s.peek();
    s.pop();

    sortStack(s);

    if (temp !== undefined) {
      insert(s, temp);
    }
  }
}

function main() {
  const numberStack = new Stack<number>();
  numberStack.push(4);
  numberStack.push(1);
  numberStack.push(3);
  numberStack.push(2);

  sortStack(numberStack);

  while (!numberStack.isEmpty()) {
    console.log(numberStack.peek());
    numberStack.pop();
  }
}

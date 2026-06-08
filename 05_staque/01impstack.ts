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

// function implementStack(input: string[]): number[] {}

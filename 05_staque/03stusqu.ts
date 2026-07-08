class MyStack {
  private q: number[] = [];

  push(x: number): void {
    this.q.push(x);

    let size = this.q.length;
    for (let i = 0; i < size - 1; i++) {
      this.q.push(this.q.shift()!);
    }
  }

  pop(): number | undefined {
    return this.q.shift();
  }

  top(): number | undefined {
    return this.q[0];
  }

  empty(): boolean {
    return this.q.length === 0;
  }
}

class MyQueue {
  private inputStack: number[] = [];
  private outputStack: number[] = [];

  push(x: number): void {
    this.inputStack.push(x);
  }

  pop(): number | undefined {
    this.peek();
    return this.outputStack.pop();
  }

  peek(): number | undefined {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop()!);
      }
    }
    return this.outputStack[this.outputStack.length - 1];
  }
  empty(): boolean {
    return this.inputStack.length === 0 && this.outputStack.length === 0;
  }
}

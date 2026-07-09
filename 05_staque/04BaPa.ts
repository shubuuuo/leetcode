class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

function isValidWrong(s: string): boolean {
  const stack = new Stack<string>();
  let ans = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
      console.log(stack);
    } else if (s[i] === "}" || s[i] === ")" || s[i] === "]") {
      if (stack.peek() === s[i]) {
        ans = true;
      } else {
        ans = false;
      }
      stack.pop();
      console.log(stack);
    }
  }

  return ans;
}

function isValid(s: string): boolean {
  const stack = new Stack<string>();

  const mapping: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.isEmpty()) {
        return false;
      }

      const topOpen = stack.peek();

      if (mapping[char] !== topOpen) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.isEmpty();
}
console.log(isValid("()"));

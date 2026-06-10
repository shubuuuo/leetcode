function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  /**
   * @param currentStr The string we are currently building
   * @param openCount  How many '(' we have used
   * @param closeCount How many ')' we have used
   */
  function backtrack(
    currentStr: string,
    openCount: number,
    closeCount: number,
  ): void {
    // Base Case: If the string length is 2 * n, we found a valid combination
    if (currentStr.length === 2 * n) {
      result.push(currentStr);
      return;
    }

    // Rule 1: Add '(' if we still have some left
    if (openCount < n) {
      backtrack(currentStr + "(", openCount + 1, closeCount);
    }

    // Rule 2: Add ')' if it won't break the "well-formed" requirement
    if (closeCount < openCount) {
      backtrack(currentStr + ")", openCount, closeCount + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}

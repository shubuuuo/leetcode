class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  // Iterative Inorder Traversal
  preorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    let st: TreeNode[] = [];
    let current: TreeNode | null = root;

    while (current !== null || st.length > 0) {
      // Reach the leftmost node of the current node
      while (current !== null) {
        st.push(current);
        current = current.left;
      }

      // Current must be null at this point
      current = st.pop()!;
      result.push(current.data); // Add the node data

      // We have visited the node and its left subtree. Now, visit the right subtree.
      current = current.right;
    }

    return result;
  }

  // Recursive Inorder Traversal
  preagain(root: TreeNode | null): number[] {
    if (root === null) {
      return [];
    }

    return [
      ...this.preagain(root.left),
      root.data,
      ...this.preagain(root.right),
    ];
  }
}

function main(): void {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  let sol = new Solution();

  let inorder = sol.preorderTraversal(root);
  console.log("Inorder traversal:", inorder.join(" "));
  console.log("In (Recursive): ", sol.preagain(root).join(" "));
}

main();

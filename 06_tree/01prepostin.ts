// Node structure for the binary tree
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

// Solution class containing the traversal function
class Solution {
  // Function to get the Preorder, Inorder, and Postorder traversal
  // Returns an array containing three number arrays
  preInPostTraversal(root: TreeNode | null): [number[], number[], number[]] {
    // Arrays to store traversals
    let pre: number[] = [],
      ino: number[] = [],
      post: number[] = [];

    // If the tree is empty, return empty structure
    if (root === null) return [[], [], []];

    // Stack to maintain nodes and their traversal state (1, 2, or 3)
    let st: [TreeNode, number][] = [[root, 1]];

    while (st.length > 0) {
      // Safely pop from stack
      let [node, state] = st.pop()!;

      // State 1: Preorder
      if (state === 1) {
        pre.push(node.data);
        st.push([node, 2]);

        if (node.left !== null) {
          st.push([node.left, 1]);
        }
      }
      // State 2: Inorder
      else if (state === 2) {
        ino.push(node.data);
        st.push([node, 3]);

        if (node.right !== null) {
          st.push([node.right, 1]);
        }
      }
      // State 3: Postorder
      else {
        post.push(node.data);
      }
    }

    return [pre, ino, post];
  }
}

// Main driver code
function main(): void {
  // Creating a sample binary tree
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);

  // Create object of Solution class
  let sol = new Solution();

  // Getting the traversals
  let [pre, ino, post] = sol.preInPostTraversal(root);

  // Printing the traversals
  console.log("Preorder traversal:", pre.join(" "));
  console.log("Inorder traversal:", ino.join(" "));
  console.log("Postorder traversal:", post.join(" "));
}

main();

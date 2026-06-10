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
  preorderTraversal(root: TreeNode | null): number[] {
    let pre: number[] = [];

    if (root === null) return [];
    let st: TreeNode[] = [root];

    while (st.length > 0) {
      let node = st.pop()!;
      pre.push(node.data);

      if (node.right) {
        st.push(node.right);
      }
      if (node.left) {
        st.push(node.left);
      }
    }

    return pre;
  }

  preagain(root: TreeNode | null): number[] {
    if (root === null) {
      return [];
    }

    return [
      root.data,
      ...this.preagain(root.left),
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

  let pre = sol.preorderTraversal(root);
  console.log("Preorder traversal:", pre.join(" "));
  console.log("Pre: ", sol.preagain(root));
}

main();

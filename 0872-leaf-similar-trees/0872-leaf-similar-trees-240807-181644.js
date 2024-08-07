/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const dfs = (root) => {
      const leaves = [];
      
      if (!root) {
          return leaves;
      }
      
      const stack = [];
      
      let current = root;
      
      while (stack.length || current) {
          while (current) {
              stack.push(current);
              current = current.left;
          }
          
          current = stack.pop();

          if (current.left === null && current.right === null) {
            leaves.push(current.val);
          }

          current = current.right;
      }
      
      return leaves;
  }
  
  const a = dfs(root1);
  const b = dfs(root2);

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

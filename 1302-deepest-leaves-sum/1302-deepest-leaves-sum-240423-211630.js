/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let maxDepth = 0;
    let sum = 0;

    function dfs(root, depth) {
      if (!root) {
        return root;
      }

      if (root.left) {
        depth++;
        dfs(root.left, depth);
        depth--;
      }

      if (root.right) {
        depth++;
        dfs(root.right, depth);
        depth--;
      }

      if (maxDepth === depth) {
        sum += root.val;
      } else if (maxDepth < depth) {
        maxDepth = depth;
        sum = root.val;
      }

      return root;
    }

    dfs(root, 1);

    return sum;
};
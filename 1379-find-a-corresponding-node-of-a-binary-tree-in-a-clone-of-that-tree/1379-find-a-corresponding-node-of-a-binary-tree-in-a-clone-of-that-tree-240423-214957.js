/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const route = [];
    let isFound = false;

    function dfs(root) {
      if (root === target) {
        isFound = true;
        return root;
      }

      if (root.left) {
        route.push('left');
        dfs(root.left);
      }

      if (isFound) {
        return root;
      }

      if (root.right) {
        route.push('right');
        dfs(root.right);
      }

      if (!isFound) {
        route.pop();
      }

      return root;
    }

    dfs(original);

    return route.reduce((acc, cur) => acc[cur], cloned);
};
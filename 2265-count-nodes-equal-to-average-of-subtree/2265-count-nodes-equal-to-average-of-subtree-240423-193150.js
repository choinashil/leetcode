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
var averageOfSubtree = function(root) {
    let result = 0;

    function dfs(root, sum = 0, count = 1) {
      if (!root) {
        return 0;
      }

      if (root.left) {
        const left = dfs(root.left);
        sum += left.sum;
        count += left.count;
      }

      if (root.right) {
        const right = dfs(root.right);
        sum += right.sum;
        count += right.count;
      }

      sum += root.val;

      if (Math.floor(sum / count) === root.val) {
        result++;
      }

      return { sum, count };
    }

    dfs(root);

    return result;
};
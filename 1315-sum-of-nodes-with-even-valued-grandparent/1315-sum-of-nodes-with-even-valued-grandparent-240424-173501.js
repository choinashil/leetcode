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
var sumEvenGrandparent = function(root) {
    let result = 0;

    function dfs(node, arr = [], level = 0) {
      if (!node) {
        return;
      }

      const isEvenValue = !(node.val % 2);
      arr[level] = isEvenValue;

      if (arr[level - 2]) {
        result += node.val;
      }

      dfs(node.left, arr, level + 1);
      dfs(node.right, arr, level + 1);

      arr.pop();

      return node;
    }

    dfs(root);

    return result;
};
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
    function dfs(oNode, cNode) {
      if (!oNode) {
        return;
      }

      if (oNode === target) {
        return cNode;
      }

      const leftResult = dfs(oNode.left, cNode.left);
      const rightResult = dfs(oNode.right, cNode.right);

      return leftResult || rightResult;
    }

    return dfs(original, cloned);
};
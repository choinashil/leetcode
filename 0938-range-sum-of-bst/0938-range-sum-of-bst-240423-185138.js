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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let result = 0;

    function dfs(node) {
        if (!node) {
        return;
        }

        dfs(node.left);
        dfs(node.right);

        if (node.val >= low && node.val <= high) {
            result += node.val;
        }
    }

    dfs(root);

    return result;
};
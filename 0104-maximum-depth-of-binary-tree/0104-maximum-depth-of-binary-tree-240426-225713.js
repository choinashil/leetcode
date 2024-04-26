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
var maxDepth = function(root) {
    let maxDepth = 0;

    function dfs(node, count = 0) {
        if (!node) {
        return node;
        }

        count++;

        dfs(node.left, count);
        dfs(node.right, count);


        if (maxDepth < count) {
        maxDepth = count;
        }
    }

    dfs(root);

    return maxDepth;
};
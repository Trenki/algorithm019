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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let Stack = []
    let res = []
    while(Stack.length>0 || root != null){
        while(root != null){
             Stack.push(root)
             res.unshift(root.val)
             root = root.right
        }
        root = Stack.pop()
        root = root.left
    }
    return res
 };
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let Stack =[],res = []
    while(Stack.length || root !=null){
       while(root !=null){
           Stack.push(root)
           root = root.left
       }
       root = Stack.pop()
       res.push(root.val)
       root = root.right
    }
    return res
};
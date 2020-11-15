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
var preorderTraversal = function(root) {
    if(!root){
        return []
    }
    const Stack = [],res = []
    while(Stack.length || root !=null){
        while(root !=null){
            res.push(root.val)
            Stack.push(root)
            root = root.left
        }
        root = Stack.pop()
        root = root.right
    }
    return res
};


var preorderTraversal = function(root,res=[]) {
    if(root != null){
        res.push(root.val)
        preorderTraversal(root.left,res)
        preorderTraversal(root.right,res)
    }
    return res
};
/**
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root){
        return []
    }
    let arr = []
    let Stack=[]
    Stack.push(root)
    while( Stack.length){
        root = Stack.pop()
        arr.push(root.val)
        for(let i=root.children.length-1;i>=0;i--){
            Stack.push(root.children[i])
        }
    }
    return arr
};
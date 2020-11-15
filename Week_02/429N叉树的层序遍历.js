/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res =[]
    function help(node,deep){
        if(node ==null) return
        if(!res[deep]) res[deep]=[]
        res[deep].push(node.val)
        for(let i=0;i<node.children.length;i++){
            help(node.children[i],deep+1)
        }
    }
    help(root,0)
    return res
};
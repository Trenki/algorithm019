/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length != inorder.length) return
    let len = inorder.length
    let map = new Map()
    for(let i=0;i< len;i++){
        map.set(inorder[i],i)
    }
    let myBuildTree = (pre_left,pre_right,in_left,in_right)=>{
        if(pre_left>pre_right) return null
        let rootVal= preorder[pre_left]
        let in_root_index = map.get(rootVal)
        let subLen = in_root_index - in_left
        let root =  new TreeNode(rootVal)
        root.left=myBuildTree(pre_left+1,pre_left+subLen,in_left,in_root_index-1)
        root.right=myBuildTree(pre_left+subLen+1,pre_right,in_root_index+1,in_right)
        return root
    }
    return myBuildTree(0,len-1,0,len-1)
};
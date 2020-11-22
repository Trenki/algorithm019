/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n<1 || n<k) return []
    let res = []
    let path=[]
    let dfs = (deep)=>{
        if(path.length == k){
            res.push(path.slice())
            return
        }
        for(let i=deep;i<=n;i++){
            path.push(i)
            dfs(i+1)
            path.pop()
        }
    }
    dfs(1)
    return res
};
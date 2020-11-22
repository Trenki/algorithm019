/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    let path  = []
    let visted = new Array(nums.length).fill(false)
    nums.sort((x, y) => x - y)
    let dfs =()=>{
        if(path.length == nums.length){
            res.push(path.slice())
            return
        }
        for(let i = 0;i<nums.length;i++){
            if(visted[i] || (i>0 && nums[i] == nums[i-1] && !visted[i - 1])) continue
            path.push(nums[i])
            visted[i]=true
            dfs()
            visted[i]=false
            path.pop()
        }
    }
    dfs()
    return res
};
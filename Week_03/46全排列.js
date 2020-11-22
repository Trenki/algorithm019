/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
   let path  = []
   let dfs =()=>{
       if(path.length == nums.length){
           res.push(path.slice())
           return
       }
       for(let i = 0;i<nums.length;i++){
           if(path.includes(nums[i])) continue
           path.push(nums[i])
           dfs()
           path.pop()
       }
   }
   dfs()
   return res

   
};
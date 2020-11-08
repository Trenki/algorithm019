var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            return [i,map.get(nums[i])]
        }
        let c = target-nums[i]
        map.set(c,i)
    }
};
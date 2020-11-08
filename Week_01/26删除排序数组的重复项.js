var removeDuplicates = function(nums) {
    let count = 1
    for(let i=1;i<nums.length;i++){
        if(nums[i] != nums[i-1]){
            nums[count] = nums[i]
            count++
        }
    }
    return count
};


var removeDuplicates = function(nums) {
    if(nums ==null || nums.length==0 ) return 0
    let p = 0,q=1;
    while(q<nums.length){
        if(nums[p] != nums[q]){
            if(q-1 > p)  nums[p+1] = nums[q]
            p++
        }
        q++
    }
    return p+1
};
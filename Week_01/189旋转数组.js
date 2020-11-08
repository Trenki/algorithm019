var rotate = function(nums, k) {
    if(k==0 || nums.length ==0){
        return nums
    }
    k = k%nums.length
    for(let i =0;i<k;i++){
        let ele = nums.pop()
        nums.unshift(ele)
    }
};
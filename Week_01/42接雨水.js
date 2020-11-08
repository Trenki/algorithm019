var trap = function(height) {
    if(height.length<3) return 0
    let res = 0
    let len = height.length
    let left_max=new Array(len),right_max=new Array(len)
    left_max[0]=height[0],right_max[len-1] = height[len-1]
    for(let i=1;i<len;i++){
        left_max[i] = Math.max(left_max[i-1],height[i])
    }
    for(let i = len-2;i>=0;i--){
        right_max[i] = Math.max(right_max[i+1],height[i])
    }
    for(let i =0;i<len;i++){
        let num = Math.min(left_max[i],right_max[i])
        res += num-height[i]
    }
    return res
};
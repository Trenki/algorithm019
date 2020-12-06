/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length == 1) return nums[0]
    let left =0 ,right = nums.length-1
    if(nums[right]>nums[0]) return nums[0]
    while(left<=right){
        let mid = left+Math.floor((right-left)/2)
        if(nums[mid] >nums[mid+1] ) return nums[mid+1]
        else if( nums[mid]<nums[mid-1]) return nums[mid]
        if(nums[mid]>nums[0]){
            left = mid+1
        }else{
            right = mid-1
        }
    }
};
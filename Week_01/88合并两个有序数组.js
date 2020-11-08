var merge = function(nums1, m, nums2, n) {
    let p=0,q = m+n-1
    while(m>0 || n >0){
        if(m==0 || nums1[m-1]<nums2[n-1]){
            nums1[q] = nums2[n-1]
            n--
        }else{
            nums1[q] = nums1[m-1]
            m--
        }
        q--
    }
};
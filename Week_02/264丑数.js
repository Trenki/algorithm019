/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let ugly = new Ugly()
    return ugly.nums[n-1]
};

class Ugly {
    constructor(){
        this.nums=new Array(1690)
        this.nums[0]=1
        let i2=0,i3=0,i5=0
        for(let i =1;i<1690;i++){
            let ugly =  Math.min(this.nums[i2]*2,this.nums[i3]*3,this.nums[i5]*5)
            this.nums[i] = ugly
            if(ugly == this.nums[i2]*2) ++i2
            if(ugly == this.nums[i3]*3) ++i3
            if(ugly == this.nums[i5]*5) ++i5
        }
    }
}
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<3) return n
    let a1=2,a2=1
    let count = 0
    for(let i=2;i<n;i++){
        count = a1+a2
        a2 = a1
        a1 = count

    }
    return count
};
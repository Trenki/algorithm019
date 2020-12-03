/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let i=g.length-1,j=s.length-1
    let count =0
    while(i>=0){
        if(s[j]>=g[i]){
            count++
            j--
        }
        i--
    }
    return count
};
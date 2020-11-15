var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let arr= new Array(26).fill(0)
    for(let i=0;i<s.length;i++){
        arr[s[i].charCodeAt()-97]++
        arr[t[i].charCodeAt()-97]--
    }
    for(let a of arr){
        if(a != 0) return false
    }
    return true
};


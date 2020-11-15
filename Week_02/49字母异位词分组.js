/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]
    let map =new Map()
    for(let str of strs){
        let key= Array.from(str).reduce((total,s)=>{
            return total*prime[s.charCodeAt()-97]
        },1)
        if(map.has(key)){
            let arr = map.get(key)
            arr.push(str)
            map.set(key,arr)
        }else{
            let arr=[str]
                map.set(key,arr)
        }
    }
    return [...map.values()]
    
};


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map =new Map()
    for(let str of strs){
        let array = new Array(26).fill(0)
        for(let s of str){
            array[s.charCodeAt()-97]++
        }
        let key =array.join('-')
        if(map.has(key)){
            let arr = map.get(key)
            arr.push(str)
            map.set(key,arr)
        }else{
            let arr=[str]
                map.set(key,arr)
        }
    }
    return [...map.values()]
    
};
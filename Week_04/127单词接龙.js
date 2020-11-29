/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(endWord.length != beginWord.length || wordList.length <1) return 0
    let Queue = [beginWord]
    let wordSet= new Set(...[wordList])
    let visited = new Set()
    let len = endWord.length
    visited.add(beginWord)
    let step =1
    let bfs=(word)=>{
        let curArr = Array.from(word)
        for(let i =0;i<len;i++){
            let temp = curArr[i]
            for(let num = 97;num<=122; num++){
                curArr[i] = String.fromCharCode(num)
                let curWord = curArr.join("")
                if(wordSet.has(curWord)){
                    if(curWord == endWord){
                        return true
                    }
                    if(!visited.has(curWord)){
                        Queue.push(curWord)
                        visited.add(curWord)
                    }
                }
            }
            curArr[i] = temp
        }
    }
    while(Queue.length>0){
        let size = Queue.length
        for(let i=0;i<size;i++){
            let word = Queue.shift()
            if(bfs(word)){
                return step+1
            }
        }
        step++

    }
    return 0
};
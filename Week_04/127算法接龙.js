/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(beginWord.length != endWord.length || !wordList.includes(endWord)) return 0
    let wordSet = new Set(...[wordList])
    let visited = new Set([beginWord])
    let step=1
    let len  = endWord.length
    let Queue = [beginWord]
    let bfs =(word)=>{
        let curArr = Array.from(word)
        for(let i=0;i<len;i++){
            let temp = curArr[i]
            for(let num=97;num<=122;num++){
                curArr[i] = String.fromCharCode(num)
                let curWord = curArr.join("")
                if(wordSet.has(curWord)&& !visited.has(curWord)){
                    if(curWord == endWord){
                        return true
                    }
                        Queue.push(curWord)
                        visited.add(curWord)
                }
            }
            curArr[i] =temp
        }
    }
    while(Queue.length>0){
        let size = Queue.length
        for(let i=0;i<size;i++){
            let curWord = Queue.shift()
            if(bfs(curWord)){
                return step+1
            }
        }
        step++
    }
    return 0


};
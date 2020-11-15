class Heap{
    constructor(){
        this.arr = []
    }
    insert(num){
        this.arr.push(num)
        let index = this.size()-1
        let parIndex = Math.floor((index-1)/2)
        let pre = index
        while(num>this.arr[parIndex]){
            this.arr[pre] = this.arr[parIndex]
            parIndex =  Math.floor((parIndex-1)/2)
            pre = parIndex
        }
        this.arr[pre] = this.arr[num]
    }
    size(){
        return this.arr.length
    }
    delete(){
        
    }
}
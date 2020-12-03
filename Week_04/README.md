#### 深度优先搜索模板
```javaScript
// 递归
function DFS(node){
    if(node in visited){
        return
    }
    visited.push(node)
    // 处理当前节点
    ...
    
    // 进入到下一层
    DFS(node.left) 
    DFS(node.right) 
}

//非递归的写法
function DFS(self,tree){
    if(tree == null) return []
    let visited = [],Stack = []
    while(Stack.length){
        let node = Stack.pop()
        visited.push(node)

        process(node)
        node = generate_related_nodes(node)
        Stack.push(node)

    }
}
```

#### 广度优先搜索模板
```javaScript
function BFS(root){
    let Queue =[],visited=[]
    Queue.push(root)
    visited.push(root)
    while(Queue.length){
        node =  Queue.shift()

        process(node)

        node = generate_related_nodes(node)
        Queue.push(node)

    }

}
```

#### 贪心算法
贪心算法是一种在每一步选择中都采取在当前状态下UI好或者最优的结果，从而希望全局能得到最优的解答

* 贪心：当下局部做出最优解
* 回溯：能够回退
* 动态规划：最优判断+回退

#### 二分查找的前提
* 目标函数单调性（单调递增、递减）
* 存在上下边界
* 能够通过索引访问到

```javaScript
// 代码模板
let left =0 ,right = arr.length-1
while(left<=right){
    let mid = (left+right)>>1
    if(arr[mid] ==target){
        return ...
    }else if(arr[mid]<target){
        left = mid+1
    }else{
        right = mid-1
    }
}
```
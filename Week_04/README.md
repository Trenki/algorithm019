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
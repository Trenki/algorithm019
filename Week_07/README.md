#### 字典树

##### 1.字典树的数据结构
基本性质；
* 1.节点本身不存在完整单词
* 2.从根节点到某一结点，路径上经过的字符连接起来，为该节点的字符串
* 3.每个结点的所有子节点路径代表的字符都不相同
##### 2.字典树的核心思想
* 1.Trei树的恶心思想是空间换时间
* 2.利用字符串的公共前缀，来降低查询的时间开销，以及达到提高效率的目的

```javascript
//示例代码
class Trie {
    constructor(){
        this.root = {}
        this.end="$"
    }

    insert(word){
        let node = this.root
        for(let w of word){
            node[w] = node[w] || {}
            node  = node[w]
        }
        node[this.end] = this.end
    }

    search(word){
        let node = this.root
        for(let  w of word){
            if(node[w]) node  = node[w]
            else return false
        }
        return node[this.end] == this.end
    }

    startsWith(word){
        let node = this.root
        for(let  w of word){
            if(node[w]) node  = node[w]
            else return false
        }
        return true
    }
}
```

#### 并查集
##### 基本操作：
* makeSet(s):建立一个新的并查集，其中包含s个单元的集合
* uninonSet(s):把元素x和元素y，所在的集合合并，要求x和y所在的集合不相交，如果相交则不合并。
* find(x):找到元素x所在的集合的代表，该操作也可以用于判断两个元素是否位于同一个集合，只要将它们各自的代表比较一下就可以了。

```javascript
// 模板代码
class UF{
    constructor(n){
        this.count =n
        this.parent = new Array(n)
        for(let i=0;i<n;i++){
            this.parent[i] = i
        }
    }

    find(p){
        let root = p
        while(this.parent[root] !== root){
            root = this.parent[root]
        }

        while(this.parent[p] !==p){
            let x = p
            p =this.parent[p]
            this.parent[x] = root
        }
        return root
    }
    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);
        if (rootP === rootQ) return;
        this.parent[rootP] = rootQ;
        this.count--;
  }
}
```
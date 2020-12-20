/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    if(M == null || M.length ==0 ||M[0].length == 0) return 0
    let len1 =M.length,len2 = M[0].length
    let uf = new UF(len2)
    for(let i=0;i<len1-1;i++){
        for(let j=i+1;j<len1;j++){
            if(M[i][j]==1) uf.union(i,j)   
        }
    }
    return uf.count
};

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
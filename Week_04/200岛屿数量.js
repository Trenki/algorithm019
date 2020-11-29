/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length ==0) return 0
    let count =0
    let len1 = grid.length
    let len2 = grid[0].length
    let dfs = (i,j)=>{
        if(i<0 || i>=len1 || j<0 || j>=len2 || grid[i][j] !="1" ) return
        grid[i][j] ="0"
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j+1)
        dfs(i,j-1)
    }

    for(let i=0;i<len1;i++){
        for(let j=0;j<len2;j++){
            if(grid[i][j] == "1"){
                dfs(i,j)
                count++
            }
        }
    }
    return count
};
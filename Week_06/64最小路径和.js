/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let len1 = grid.length
    let len2 =  grid[0].length 
    if(grid ==null || len1 ==0 || len2 ==0) return 0
    let dp = new Array(len1).fill(0).map(v=> new Array(len2).fill(0))
    dp[0][0] = grid[0][0]

    for(let i = 1;i<len1;i++){
        dp[i][0] = dp[i-1][0]+grid[i][0]
    }
    for(let i = 1;i<len2;i++){
        dp[0][i] = dp[0][i-1]+grid[0][i]
    }
    for(let i=1;i<len1;i++){
        for(let j=1;j<len2;j++){
            dp[i][j]= Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]
        }
    }
    return dp[len1-1][len2-1]
};


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let len1 = grid.length
    let len2 =  grid[0].length 
    if(grid ==null || len1 ==0 || len2 ==0) return 0
    let dp = new Array(len1).fill(0).map(v=> new Array(len2).fill(0))

    for(let i=0;i<len1;i++){
        for(let j=0;j<len2;j++){
            if(i==0&&j==0) dp[i][j] = grid[i][j]
            else if(i==0) dp[i][j] = dp[i][j-1] +grid[i][j]
            else if(j==0) dp[i][j] = dp[i-1][j] +grid[i][j]
            else dp[i][j]= Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]
        }
    }
    return dp[len1-1][len2-1]
};
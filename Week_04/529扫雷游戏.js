/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let dx = [-1,0,1,-1,1,-1,0,1]
    let dy = [-1,-1,-1,0,0,1,1,1]
    let x=click[0],y = click[1]
    if(board[x][y] == "M"){
        board[x][y] = "X"
    }else{
        dfs(x,y)
    }
    function dfs(col,row){
        let count = 0
        for(let i=0;i<8;i++){
            let ddx = dx[i]+col
            let ddy = dy[i]+row
            if(ddx<0 || ddx>=board.length || ddy<0 || ddy>=board[0].length)continue
            if(board[ddx][ddy] == "M") count++
        }
        if(count>0){
          board[col][row] = count.toString()
        }else{
            board[col][row] ="B"
             for(let i=0;i<8;i++){
                let ddx = dx[i]+col
                let ddy = dy[i]+row
                if(ddx<0 || ddx>=board.length || ddy<0 || ddy>=board[0].length  || board[ddx][ddy] != "E")continue
                dfs(ddx,ddy)
            }
        }
    }
    return board
};
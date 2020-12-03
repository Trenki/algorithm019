/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length==0) return 0
    let profit=0,pre=prices[0]
    for(let i=1;i<prices.length;i++){
        if(prices[i]>pre){
            profit +=prices[i]-pre
        }
            pre = prices[i]

    }
    return profit
};
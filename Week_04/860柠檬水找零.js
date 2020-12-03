/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let n5=0,n10=0
    for(let bill of bills){
        if(bill == 5){
            n5++
        }else if(bill ==10){
            if(n5>0) n5--,n10++
            else return false
        }else{
            if(n10>0 && n5>0) n5--,n10--
            else if(n5>2) n5 -=3
            else return false
        }
    }
    return true
 };
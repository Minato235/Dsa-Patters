var maxProfit = function(prices) {
    let profit=0;
    let left=0,right=1;
    while(left<prices.length){
        if(prices[left]<prices[right]){
            p=prices[right]-prices[left]
            profit=Math.max(p,profit)
        }else{
            left=right;
        }
        right+=1;


    }
    return profit
};
let prices =[7,6,4,3,1];
console.log(maxProfit(prices))

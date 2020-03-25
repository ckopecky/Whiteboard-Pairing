

// O(n^2) time complexity -- first pass solution


// const bitCoinTrading = arr => {
//     if(!arr || arr.length < 2) {
//         return "Must have at least two prices to find max profit"
//     }

//     let maxProfit = arr[1] - arr[0];

//     for(let i = 0; i < arr.length - 1; i++) {
//         let buyPrice = arr[i];
//         for(let j = i + 1; j < arr.length; j++) {
//             let sellPrice = arr[j];
//             let potentialProfit = sellPrice - buyPrice;
//             console.log(potentialProfit, "potential profit",i, j)
//             if(potentialProfit > maxProfit) {
//                 maxProfit = potentialProfit;
//             }
//         }
//     }
//     return maxProfit;
// }

const bitCoinTrading = prices => {
    if(prices.length < 2 || !prices) {
        return "Must have at least two prices to find max profit"
}
     
      let maxProfit = prices[1] - prices[0];
      let minPriceSoFar = prices[0];
      
      for(let i = 1; i < prices.length; i++) {
          let buyValue = prices[i];
         
          
          let currentProfit = buyValue - minPriceSoFar;
          
          maxProfit = Math.max(maxProfit, currentProfit);
          minPriceSoFar = Math.min(buyValue, minPriceSoFar);
    
      }
      
      return maxProfit
}

module.exports = bitCoinTrading;
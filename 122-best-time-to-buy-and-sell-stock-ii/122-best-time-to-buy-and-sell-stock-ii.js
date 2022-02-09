/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const profits = [];
  
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      profits.push(profit);
    }
  }

  return profits.length ? profits.reduce((a, b) => a + b) : 0;
};
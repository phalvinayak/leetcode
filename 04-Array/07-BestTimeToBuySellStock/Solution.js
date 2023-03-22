/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfitValue = 0;
  let cheapestPriceIndex = 0;
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - prices[cheapestPriceIndex];
    maxProfitValue = profit > maxProfitValue ? profit : maxProfitValue;
    if (prices[i] < prices[cheapestPriceIndex]) {
      cheapestPriceIndex = i;
    }
  }
  return maxProfitValue;
};

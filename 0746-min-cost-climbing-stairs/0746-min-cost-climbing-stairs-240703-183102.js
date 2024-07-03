/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const map = {
    0: cost[0],
    1: cost[1]
  };

  for (let i = 2; i < cost.length; i++) {
    if (map[i] === undefined) {
      map[i] = Math.min(map[i - 2], map[i - 1]) + cost[i];
    }
  }

  return Math.min(map[cost.length - 2], map[cost.length - 1]);
};
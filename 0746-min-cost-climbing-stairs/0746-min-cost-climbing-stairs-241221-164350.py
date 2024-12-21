class Solution:
    def minCostClimbingStairs(self, cost):
        n = len(cost)

        for i in range(2, n):
            cost[i] = min(cost[i - 1], cost[i - 2]) + cost[i]

        return min(cost[n - 1], cost[n - 2])
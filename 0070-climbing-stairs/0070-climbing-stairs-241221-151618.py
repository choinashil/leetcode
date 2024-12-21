class Solution:
    def climbStairs(self, n):
        def dp(n):
            if n in map:
                return map[n]
            else:
                result = dp(n - 1) + dp(n - 2)
                map[n] = result
                return result
        

        map = {
            0: 1,
            1: 1
        }

        return dp(n)
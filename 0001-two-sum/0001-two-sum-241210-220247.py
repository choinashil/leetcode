class Solution:
    def twoSum(self, nums, target):
        memo = {}

        for i in range(len(nums)):
            if target - nums[i] in memo:
                return [memo[target - nums[i]], i]
        
            memo[nums[i]] = i
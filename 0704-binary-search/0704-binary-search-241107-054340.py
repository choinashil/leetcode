class Solution:
    def search(self, nums: List[int], target: int) -> int:
        def binary_search(left, right):
            center = right - math.ceil((right - left) / 2)

            if nums[center] == target:
                return center
            
            if left == center and right == center:
                return -1

            if nums[center] > target:
                return binary_search(left, center)
            else:
                return binary_search(center + 1, right)
        
        return binary_search(0, len(nums) - 1)
        
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, num in enumerate(nums):
            j = i + 1
            while j < len(nums):
                if num + nums[j] == target:
                    return [i, j]
                else:
                    j+=1

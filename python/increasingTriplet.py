class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        i, j = math.inf, math.inf
        for idx in range(len(nums)):
            if nums[idx] <= i:
                i = nums[idx]
            elif nums[idx] <= j:
                j = nums[idx]
            else:
                return True
        return False

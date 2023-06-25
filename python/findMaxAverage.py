class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        index = 0
        max_average = -math.inf
        while index + k <= len(nums):
            if index == 0:
                window = nums[index:index+k]
                window_sum = sum(window)
            else:
                window_sum-=nums[index-1]
                window_sum+=nums[index+k-1]
                
            current_average = window_sum / k
            if current_average > max_average:
                max_average = current_average
            index+=1
        return max_average

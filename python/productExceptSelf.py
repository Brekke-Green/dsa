class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = []
        cache = {}
        sum = 1
        flag = False
        if 0 in nums:
            for index, num in enumerate(nums):
                if num == 0 and flag == False:
                    flag = True
                    prod = math.prod(nums[:index] + nums[index+1:])
                    result.append(prod)
                elif num == 0 and flag:
                    return [0] * len(nums)
                else:
                    result.append(0)
            return result
        else:
            for index, num in enumerate(nums):
                prod = cache.get(num)
                if prod:
                    result.append(prod)
                else:
                    prod = math.prod(nums[:index] + nums[index+1:])
                    result.append(prod)
                    cache[num] = prod
        return result

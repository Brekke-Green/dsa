class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        result = [[],[]]
        set_nums1 = {n1 for n1 in nums1}
        set_nums2 = {n2 for n2 in nums2}
        for num in set_nums1:
            if num in set_nums2:
                continue
            else:
                result[0].append(num)
        for num in set_nums2:
            if num in set_nums1:
                continue
            else:
                result[1].append(num)
        return result

class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        counter = {}
        for num in arr:
            if num in counter:
                counter[num]+=1
            else:
                counter[num] = 1
        counts_set = {x for x in counter.values()}
        return len(counter.values()) == len(counts_set)

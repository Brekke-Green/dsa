class Solution:
    def __init__(self):
        self.cache = {}

    def tribonacci(self, n: int) -> int:
        if n in self.cache:
            return self.cache[n]
        if n <= 0:
            return 0
        if n == 1 or n == 2:
            return 1
        
        result = self.tribonacci(n-3) + self.tribonacci(n-2) + self.tribonacci(n-1)
        self.cache[n] = result
        return result

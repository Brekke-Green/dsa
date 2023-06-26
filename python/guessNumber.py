class Solution:
    def guessNumber(self, n: int) -> int:
        low = 1
        high = n
        while True:
            mid = (low + (high - low) // 2)
            num = guess(mid)
            if num < 0:
                high = mid
            elif num > 0:
                low = mid + 1
            else:
                return mid
            if low > high:
                break

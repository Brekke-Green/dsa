class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        planted = 0

        if n == 0:
            return True
        if len(flowerbed) < 3:
            if n == 1 and sum(flowerbed) == 0:
                return True
            else:
                return False

        for idx, plot in enumerate(flowerbed):
            if idx == 0:
                if plot == 0 and flowerbed[idx + 1] == 0:
                    flowerbed[idx] = 1
                    planted+=1
            elif idx == len(flowerbed) - 1:
                if plot == 0 and flowerbed[idx - 1] == 0:
                    flowerbed[idx] = 1
                    planted+=1
            else:
                if plot == 0 and flowerbed[idx - 1] == 0 and flowerbed[idx + 1] == 0:
                    flowerbed[idx] = 1
                    planted+=1
        return (n <= planted)

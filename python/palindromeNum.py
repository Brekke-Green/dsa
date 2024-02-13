class Solution:
    def isPalindrome(self, x: int) -> bool:
        arr = list(str(x))
        i = 0
        j = len(arr)-1

        while (i < len(arr) and j >= 0):
            if arr[i] == arr[j]:
               i+=1
               j-=1
            else:
                return False 
        return True

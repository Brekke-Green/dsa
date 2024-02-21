class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        sub = []
        shortest = float('inf')
        index = 0

        for s in strs:
            if len(s) < shortest: 
                shortest = len(s)

        while index < shortest:
            chars = {strs[0][index]}
            for string in strs:
                chars.add(string[index])
            if len(chars) > 1:
                return ''.join(sub)
            else:
                sub.append(chars.pop())
            index+=1

        return ''.join(sub)  

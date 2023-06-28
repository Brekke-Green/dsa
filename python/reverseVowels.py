class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
        vowel_list = []
        s = [l for l in s]
        for index, letter in enumerate(s):
            if letter in vowels:
                vowel_list.append(letter)
                s[index] = 'vowel'
        for index, letter in enumerate(s):
            if letter == 'vowel':
                s[index] = vowel_list.pop()
        return "".join(s)

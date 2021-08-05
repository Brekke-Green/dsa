// LeetCode Letter Combinations of a Phone Number (Iterative Solution) - Runtime: 70.25%, Memory: 49.31%

var letterCombinations = function(digits) {
    const digLength = digits.length;
    if (digLength === 0) {
        return [];
    }
    const map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
        };
    
    let result = [""];
    
    const addLetters = (input, letters) => {
        const output = [];
        while (letters.length > 0) {
            const currentLetter = letters.pop();
            for (let i = 0; i < input.length; i++) {
                const permutation = input[i] + currentLetter;
                output.push(permutation);
            }
        }
        return output;
    };
    
    for (let i = 0; i < digLength; i++) {
        let letters = map[digits[i]].slice();
        result = addLetters(result, letters);
    }
    
    return result;
};
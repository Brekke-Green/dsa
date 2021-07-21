// LeetCode - Longest Common Prefix - Runtime: 83.69%, Memory: 89.20%

var longestCommonPrefix = function(strs) {
    let result = "";
    let counter = 0;
    let flag = true;
    
    if (strs.length === 0 || strs[0].length === 0) {
        return "";
    } else if (strs.length === 1) {
        return strs[0];
    }
    
    let currentLetter = "";
    
    const checkLetter = (str) => (str[counter] === currentLetter);
    
    while (flag && strs[0][counter]) {
        currentLetter = strs[0][counter];
        if (strs.every(checkLetter)) {
            result += currentLetter;
        } else {
            flag = false;
        }
        counter+=1;
    }
    return result;
};
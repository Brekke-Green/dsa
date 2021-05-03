// WRONG ANSWER BUT STILL WORKING


/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let resultS = [];
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (resultS.includes(s[i])) {
            resultS.shift();
        }
        resultS.push(s[i]);
        if (result < resultS.length) {
            result = resultS.length;
        }
    }
    return result;
};
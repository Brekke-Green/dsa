// LeetCode Valid Parentheses Problem Solution - Runtime: 85.47%, Memory: 67.10%

var isValid = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if ("({[".includes(s[i])) {
            stack.push(s[i])
        } else {
            switch(s[i]) {
                    case ")":
                        if (stack.pop() !== "(") {
                            return false;
                        }
                        break;
                    case "}":
                        if (stack.pop() !== "{") {
                            return false;
                        }
                        break;
                    case "]":
                        if (stack.pop() !== "[") {
                            return false;
                        }
                        break;
            }
        }
    }
    return (stack.length === 0);
};
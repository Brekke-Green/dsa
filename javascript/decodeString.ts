function decodeString(s: string): string {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != "]") {
            stack.push(s[i])
        } else {
            let substr = ""
            while (stack[stack.length-1] != "[") {
                substr = stack.pop() + substr
            }
            stack.pop()

            let k = ""
            while (stack && !isNaN(stack[stack.length-1])) {
                k = stack.pop() + k
            }
            for (let j = 0; j < Number(k); j++) {
                stack.push(substr)
            }
        }
    }
    return stack.join("")
};

function reverseWords(s: string): string {
    let s_arr = s.split(' ');
    s_arr = s_arr.filter(word => word.length >= 1)
    const result = []
    for (let i = s_arr.length - 1; i >= 0; i--) {
        result.push(s_arr[i])
    }
    return result.join(" ")
};

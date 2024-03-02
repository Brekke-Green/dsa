var reverse = function(x) {
        let arr = x.toString().split("")
        let rev = []
        for (let i = arr.length-1; i >= 0; i--) {
                    rev.push(arr[i])
                }
        let num = 0
        x > 0 ? num = parseInt(rev.join("")): num = -parseInt(rev.join(""))
        if (num >= (2**31) - 1 || num <= -(2**31)) {
                    return 0
                } 
        return num
};

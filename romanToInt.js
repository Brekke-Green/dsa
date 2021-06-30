// Leet Code romanToInt challenge - completed - (95% runtime; 38% memory storage)

var romanToInt = function(s) {
    const keyTable = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    const arr = s.split("");
    arr.forEach((letter, index) => {
        
        switch (letter) {
            case "C":
                if ("MD".includes(arr[index + 1])) {
                    result-= 100;
                } else {
                    result+= 100;
                }
                break;
            case "X":
                if ("LC".includes(arr[index + 1])) {
                    result-= 10;
                } else {
                    result+= 10;
                }
                break;
            case "I":
                if ("VX".includes(arr[index + 1])) {
                    result-= 1;
                } else {
                    result+= 1;
                }
                break;
            default:
                result+= keyTable[letter];
        }
    })
    return result;
};
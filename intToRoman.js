// Int to Roman numeral Leet Code - not completed

var intToRoman = function(number) {
    const romanNum = {'1': 'I',
                    '5': 'V',
                    '10': 'X',
                    '50': 'L',
                    '100': 'C',
                    '500': 'D',
                    '1000': 'M'
                   };
    const nums = [ 1000, 500, 100, 50, 10, 5, 1 ];
    
    let result = "";
    let num = number;
    while (num > 0) {
        let i = 0;
        if (i > 6) {
            break;
        }
        if (num % nums[i] === num) {
            i+=1;
            continue;
        }
        if (i < 2) {
            if ((((num % nums[i]) - nums[i+1]) % (nums[2] * 4) < nums[2]) || (num % nums[i] % (nums[2] * 4))) {
                let iLetter = romanNum[num[i]];
                let cLetter = romanNum[num[2]];
                let addition = iLetter + cLetter
                result.concat(addition);
                num%=nums[i];
                console.log(num);
                console.log(result)
            } else {
                let iLetter = romanNum[`$(num[i])`];
                result+=iLetter;
                num%=nums[i];
                console.log(num);
            }
        }
        if (i < 4) {
            if ((((num % nums[i]) - nums[i+1]) % (nums[4] * 4) < nums[4]) || (num % nums[i] % (nums[4] * 4))) {
                let iLetter = romanNum[`$(num[i])`];
                let cLetter = romanNum[`$(num[4])`];
                let addition = iLetter + cLetter
                result+=addition;
                num%=nums[i];
                console.log(num);
            } else {
                let iLetter = romanNum[`$(num[i])`];
                result+=iLetter;
                num%=nums[i];
                console.log(num);
            }
        }
        if (i < 6) {
            if ((((num % nums[i]) - nums[i+1]) % (nums[6] * 4) < nums[6]) || (num % nums[i] % (nums[6] * 4))) {
                let iLetter = romanNum[`$(num[i])`];
                let cLetter = romanNum[`$(num[6])`];
                let addition = iLetter + cLetter
                result+=addition;
                num%=nums[i];
                console.log(num);
            } else {
                let iLetter = romanNum[`$(num[i])`];
                result+=iLetter;
                num%=nums[i];
                console.log(num);
            }
        }
    }
    return result;
};
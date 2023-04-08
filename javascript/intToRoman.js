// LeetCode Int to Roman numeral Solution - Runtime: 85.75%, Memory: 36.65%

var intToRoman = function(num) {
    const romanNum = {
        '1': 'I',
        '4': 'IV',
        '5': 'V',
        '9': 'IX',
        '10': 'X',
        '40': 'XL',
        '50': 'L',
        '90': 'XC',
        '100': 'C',
        '400': 'CD',
        '500': 'D',
        '900': 'CM',
        '1000': 'M'
    };
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let result = "";
    let number = num;
    let i = 0;
    while (number > 0) {
        if (i > nums.length-1) {
            break;
        }
        if (number % nums[i] === number) {
            i+=1;
            continue;
        } else {           
            result+= romanNum[nums[i].toString()].repeat(Math.floor(number / nums[i]));
            number -= nums[i] * Math.floor(number / nums[i]);
            if (number === 0) {
                break;
            }
            i += 1;
        }
    }
    
    return result;
};
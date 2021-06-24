// Codewars isValidIP kata

function isValidIP(str) {
    if (/[a-z]/i.test(str)) { return false };
    if (str.split(' ').length > 1) { return false };
    if (str.split('e').length > 1) { return false };
    const arr = str.split(".");
    //   console.log(arr);
    if (arr.length !== 4) { return false };
    if (arr.some((octet) => { isNaN(octet)})) { return false };
    if (funky(arr)) { return false};
    let numbers = arr.map((octet) => parseInt(octet));
    //   console.log(numbers);
    if (numbers.some((number) => number > 255)) { return false };
    if (numbers.some((number) => number < 0 )) { return false };
    return true;
    };

    function funky(arr) {
    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx].length !== parseInt(arr[idx]).toString().length) { return true }
    }
    return false;
};
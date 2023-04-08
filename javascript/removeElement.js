// LeetCode Remove Element Solution 1 - Runtime: 13.27%, Memory: 78.28%
var removeElement = function(nums, val) {
    let counter = 0;
    let index = nums.length-1;
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === val) {
            nums[i] = nums[index];
            nums[index] = "_";
            index-=1;
        } else {
            counter+=1;
        }
    }
    return counter-1;
};

// LeetCode Remove Element Solution 2 - Runtime: 60.32%, Memory: 11.83%

var removeElement = function(nums, val) {
    let counter = 0;
    let index = nums.length-1;
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === val) {
            let temp = nums[index];
            nums[index] = "_";
            nums[i] = temp;
            index-=1;
        } else {
            counter+=1;
        }
    }
    return counter-1;
};
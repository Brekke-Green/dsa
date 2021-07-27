// LeetCode Remove Duplicates Problem Solution - Runtime: 87.03%, Memory: 47.68% 

var removeDuplicates = function(nums) {
    let counter = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[counter] === nums[i]) {
            nums[i] = "_";
        } else if (nums[counter] < nums[i]) {
            counter += 1;
            if (nums[counter] === "_") {
                nums[counter] = nums[i];
                nums[i] = "_";
            }
        }
    }
    return counter+1;
};
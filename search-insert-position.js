// LeetCode Search Insert Position Solution - Runtime: 97.35%, Memory: 90.48%

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] > target) {
            right = middle - 1
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle;
        }
    }
    return Math.max(left, right);
};
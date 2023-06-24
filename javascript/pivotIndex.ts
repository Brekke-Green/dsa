function pivotIndex(nums: number[]): number {
    let left_sum = 0;
    let right_sum = 0;
    for (let i = nums.length - 1; i > 0; i--) {
        right_sum+=nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        if (left_sum === right_sum) {
            return i;
        } else {
            right_sum-=nums[i+1];
            left_sum+=nums[i];
        }
    }
    return -1
};

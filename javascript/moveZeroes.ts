function moveZeroes(nums: number[]): void {
    if (nums.length <= 1) {
        return
    }
    let currentIndex = 0
    let numIndex = 0
    let zeroCount = 0
    while (currentIndex < nums.length) {
        if (nums[currentIndex] === 0) {
            zeroCount++
            currentIndex++
        } else {
            nums[numIndex] = nums[currentIndex]
            numIndex++
            currentIndex++
        }
    }
    while (zeroCount > 0) {
        nums[nums.length-zeroCount] = 0
        zeroCount--
    }
};

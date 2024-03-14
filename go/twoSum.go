func twoSum(nums []int, target int) []int {
    numbers := make(map[int]int)
    for idx, num := range(nums) {
        if digit, found := numbers[target-num]; found {
            return []int{digit, idx}
        }
        numbers[num] = idx 
    }
    return []int{}
}

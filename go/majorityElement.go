func majorityElement(nums []int) int {
    m := make(map[int]int)
    var max int
    for _, num := range nums {
        val, found := m[num]
        if found {
            val++
            m[num] = val
            if m[max] < val {
                max = num
            }
        } else {
            m[num] = 1
            if m[max] <= val {
                max = num
            }
        }
    }
    return max
}

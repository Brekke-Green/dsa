func singleNumber(nums []int) int {
    m := make(map[int]int)
    var r int
    var found bool
    for i, num := range nums {
        _, found = m[num]
        if found == false {
            m[num] = i
        } else {
            delete(m, num)
        }
    }
    for key, _ := range m {
        r = key
    }
    return r
}

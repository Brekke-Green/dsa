func climbStairs(n int) int {
    a, b := 1, 1
    for i := 0; i < n - 1; i++ {
        temp := a
        a = a + b
        b = temp
    }
    return a
}

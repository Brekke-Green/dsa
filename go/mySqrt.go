func mySqrt(x int) int {
    var result int
    switch x {
    case 2:
        return 1
    case 1:
        return 1
    case 0:
        return 0
    }

    for i := 2; i < x; i++ {
        if i * i > x {
            result = i -1
            break
        }
    }
    return result
}

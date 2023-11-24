func corpFlightBookings(bookings [][]int, n int) []int {
    arr := make([]int, n)
    for _, q := range bookings {
       for i := q[0]-1; i < q[1]; i++ {
           arr[i]+=q[2]
        } 
    }
    return arr
}

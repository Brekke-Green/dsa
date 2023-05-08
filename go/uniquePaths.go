func uniquePaths(m int, n int) int {
    row := make([]int, n)
    for i:=m-1; i >= 0; i-- {
        newRow := make([]int, n)
        for j := range(newRow) {
            newRow[j] = 1
        }
        for j := n - 2; j >= 0; j -- {
            newRow[j] = newRow[j+1] + row[j]
        }

        row = newRow
    }    
    return row[0]
}

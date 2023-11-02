func plusOne(digits []int) []int {
    length := len(digits) + 1
    result := make([]int, length)
    carrie := 0
	for i := len(digits) - 1; i >= 0; i-- {
		if i == len(digits)-1 {
            carrie = 1
        }
		// digit := digits[i] + 1
		if (digits[i] + carrie) > 9 {
			result[i+1] += (digits[i] + carrie) % 10
            carrie = 1
		} else {
			result[i+1] += (digits[i] + carrie) % 10
            carrie = 0
        }
	}
    if carrie != 0 {
        result[0] += carrie
    }
    if result[0] == 0 {
        return result[1:]
    }
    return result
}

func maxProfit(prices []int) int {
    if len(prices) <= 1 {
        return 0
    }
    left := 0
    right := left + 1
    max_profit := 0
    var left_val int
    var right_val int
    var current_profit int
    for right < len(prices) {
        left_val = prices[left]
        right_val = prices[right]
        if left_val > right_val {
            left = right
            right = left + 1
        } else {
            current_profit = right_val - left_val
            if current_profit > max_profit {
                max_profit = current_profit
            }
            right++
        }
   }
   return max_profit
}

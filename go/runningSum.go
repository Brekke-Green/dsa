func runningSum(nums []int) []int {
   sum := 0
   var result []int = nums
   for i := 0; i < len(nums); i++ {
       sum+=nums[i]
       result[i] = sum
   } 
   return result
}

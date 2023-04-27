func pivotIndex(nums []int) int {
  right := 0
  left := 0
  pivot := 0
  for _, num := range nums {
    right+=num
  }
  right-= nums[pivot]
  for left != right {
    pivot++
    if pivot >= len(nums) {
      return -1
    }
    right-=nums[pivot]
    left+=nums[pivot-1]
  }
  return pivot
}

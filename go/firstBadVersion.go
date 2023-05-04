func firstBadVersion(n int) int {
   left := 1
   right := n
   previous_bad := n
   for left <= right {
      mid := (right + left) / 2
      if isBadVersion(mid) == true {
         previous_bad = mid
         right = mid-1
      } else {
         left = mid+1
      }
   }
   return previous_bad
}

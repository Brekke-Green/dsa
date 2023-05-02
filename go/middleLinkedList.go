func middleNode(head *ListNode) *ListNode {
   mid_index := 0
   mid := head
   current := head
   current_index := 0
   for current != nil {
       if mid_index < (current_index / 2) {
           mid_index++
           mid = mid.Next
       }
       current_index++
       current = current.Next
   }
   if current_index % 2 == 0 {
       return mid.Next
   }
   return mid
}

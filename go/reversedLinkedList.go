func reverseList(head *ListNode) *ListNode {
   var current = head
   var previous *ListNode
   for current != nil {
       temp := current.Next
       current.Next = previous
       previous = current
       current = temp
   } 
   return previous
}

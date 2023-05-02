func detectCycle(head *ListNode) *ListNode {
   node_map := make(map[*ListNode]int)
   current := head
   for current != nil {
       if _, found := node_map[current]; found {
           return current
       } else {
           node_map[current] = 0
           current = current.Next
       }
   }
   return nil
}

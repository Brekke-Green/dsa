class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        position = 0
        current = head
        while current:
            position+=1
            current = current.next
        
        position = position // 2 + 1
    
        temp = head
        prev = head
        for i in range(0, position):
            if i == 0 and position == 1:
                head = head.next
            else:
                if i == position-1 and temp is not None:
                    prev.next = temp.next
                else:
                    prev = temp
                    if prev is None:
                        break
                    temp = temp.next
        return head

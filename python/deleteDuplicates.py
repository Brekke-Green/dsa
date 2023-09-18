class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = ListNode(val=None)
        current = head
        while current:
            if current.val == prev.val:
                prev.next = current.next
            else:
                prev = current
            current = current.next
        return head

def middleNode(linkedList):
    mid = linkedList
    lead = linkedList
    index = 0
    while lead:
        if index % 2 == 1:
            mid = mid.next
        lead = lead.next
        index+=1
    return mid

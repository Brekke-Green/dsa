// LeetCode Merge Two Sorted Lists Problem Solution - Runtime: 73.20%, Memory: 60.80%

var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return l1;
    } else if (!l1 || !l2) {
        let notEmpty = l1 ? l1 : l2 ;
        return notEmpty;
    }
    
    let head = "";
    if (l1.val < l2.val) {
        head = l1;
    } else {
        let temp = l2;
        l2 = l2.next;
        temp.next = l1;
        head = temp;
    }
    let current = head;
    let onDeck = l2;
    
    let sorting = true;
    
    while (sorting) {
        if (current.next === null || onDeck === null) {
            sorting = false;
            break;
        }
        if (current.next.val <= onDeck.val) {
            current = current.next;
        } else if (current.next.val > onDeck.val) {
            let currentTemp = current.next;
            let onDeckTemp = onDeck.next;
            current.next = onDeck;
            current = current.next;
            current.next = currentTemp;
            onDeck = onDeckTemp;
        }
    }
    if (onDeck) {
        current.next = onDeck;
    }
    return head;
};
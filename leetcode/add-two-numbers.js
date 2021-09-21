/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let p = head,c = false;
    while (l1 || l2) {
        let sum = p.val;
        if(l1){
          sum += l1.val;
          l1 = l1.next;
        }
        if(l2){
          sum += l2.val;
          l2 = l2.next;
        }
        p.val = sum % 10;
        if (sum > 9) {
          c = true
        }else c = false;
        if (c) {
            p.next = new ListNode(1);
            p = p.next;
        } else if (l1 || l2) {
            p.next = new ListNode(0);
            p = p.next;
        }
    }
    return head
  }
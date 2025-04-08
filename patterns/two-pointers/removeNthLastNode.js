// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// import { ListNode } from './ds_v1/LinkedList.js';

function removeNthLastNode(head, n) {


  const dummy = {
    val: 0,
    next: head,
  }
  let fast = head;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
    if (!fast) {
      return dummy.next;
    }
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}


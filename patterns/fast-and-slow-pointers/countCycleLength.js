

import { ListNode } from './ds_v1/LinkedList.js';

function countCycleLength(head) {

  let slow = head;
  let fast = head;

  do {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  } while ((slow && slow.next && fast && fast.next) || (slow === fast))

  if (!fast || !fast.next) {
    return 0;
  }

  let count = 1;

  // fast = slow.next;
  // while (slow !== fast) {
  //     fast == fast.next;
  //     console.log("called")
  //     count++;
  // }

  // let current = slow;
  fast = slow.next;

  while (fast !== slow) {
    fast = fast.next;
    count++;
  }


  return count;
}

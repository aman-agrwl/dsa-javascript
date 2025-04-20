function findDuplicate(nums) {

  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];

    console.table({
      slow: slow,
      fast: fast,
      slowValue: nums[slow],
      fastValue: nums[fast]

    })
  } while (slow !== fast);

  // Phase 2: Find the entrance to the cycle
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  console.table({
    slow: slow,
    fast: fast,
    slowValue: nums[slow],
    fastValue: nums[fast]

  })
  return slow;
}

findDuplicate([1,2,3,4,5,6,6,7])
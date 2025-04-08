function threeSum(nums) {
  let triplet = [];
  nums = nums.sort((a, b) => a - b);
  console.log("nums", nums);
  // Replace this placeholder return statement with your code
  for (let i = 0; i < nums.length-2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let p1 = i + 1;
    let p2 = nums.length - 1;

    let sum = 0 - nums[i];

    while (p1 < p2) {
      let s = nums[p1] + nums[p2];
      if (s < sum) {
        p1++;
      } else if (s > sum) {
        p2--;
      }
      else {
        triplet.push([nums[i], nums[p1], nums[p2]])
        // Skip duplicates
        while (p1 < p2 && nums[p1] === nums[p1 + 1]) p1++;
        while (p1 < p2 && nums[p2] === nums[p2 - 1]) p2--;
        p1++;
        p2--;
      }
    }
  }


  return triplet
};

console.log(threeSum([-1,0,1,2,-1,-4]));
// Given an array of integers nums and a window size k, find the maximum sum of any contiguous subarray of size k.
function maxSubarraySum(nums, k) {
  const n = nums.length;
  if (n < k || k <= 0) {
    return 0; // Or handle error appropriately
  }

  // Calculate the sum of the first window
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  let maxSum = currentSum;

  // Slide the window
  for (let i = k; i < n; i++) {
    // Subtract the element going out, add the element coming in
    currentSum = currentSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const nums = [1, 3, -2, 4, -1, 5];
const k = 3;
const maxSum = maxSubarraySum(nums, k);
console.log(`Maximum sum of subarray of size ${k}: ${maxSum}`); // Output: 8
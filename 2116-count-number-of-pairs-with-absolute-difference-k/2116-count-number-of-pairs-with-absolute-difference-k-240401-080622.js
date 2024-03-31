/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  nums.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          const difference = Math.abs(nums[i] - nums[j]);
``
          if (difference === k) {
              result++;
          }
      }
  }

  return result;
};
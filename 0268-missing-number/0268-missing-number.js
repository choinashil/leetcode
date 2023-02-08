/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort((a, b) => a - b);
  const result = nums.findIndex((n, i) => n !== i);
  return result === -1 ? nums.length : result;
};
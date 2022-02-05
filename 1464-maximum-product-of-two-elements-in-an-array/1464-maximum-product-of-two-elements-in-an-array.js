/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const sorted = nums.sort((a, b) => a - b);
  const num1 = sorted.pop();
  const num2 = sorted.pop();
  
  return (num1 - 1) * (num2 - 1);
};
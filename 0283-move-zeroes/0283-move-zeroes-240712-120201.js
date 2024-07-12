/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && i < nums.length - zeroCount) {
      zeroCount++;
      const [zero] = nums.splice(i, 1);
      nums.push(zero);
      i--;
    }
  }

  return nums;
};
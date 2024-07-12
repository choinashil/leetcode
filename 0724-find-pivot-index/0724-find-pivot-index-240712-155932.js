/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);

    let left = 0;
    let right = sum;

    for (let i = 0; i < nums.length; i++) {
      if (i > 0) {
        left = left + nums[i - 1];
      }
      right = right - nums[i];

      if (left === right) {
        return i;
      }
    }

    return -1;
};
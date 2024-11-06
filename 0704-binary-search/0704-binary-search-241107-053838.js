/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  function binarySearch(left, right) {
    const center = right - Math.ceil((right - left) / 2);

    if (nums[center] === target) {
      return center;
    }

    if (left === center && right === center) {
      return -1;
    }

    if (nums[center] > target) {
      return binarySearch(left, center);
    } else {
      return binarySearch(center + 1, right);
    }
  }

  return binarySearch(0, nums.length - 1);
};

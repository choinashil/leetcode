/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        while (nums[j] === val) {
            j--;
        }

        if (i > j) {
            break;
        }

        if (nums[i] === val) {
            nums[i] = nums[j];
            j--;
        }
    }

    return j + 1;
};
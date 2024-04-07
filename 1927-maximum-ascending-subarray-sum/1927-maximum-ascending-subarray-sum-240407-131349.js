/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = 0;
    let sum = 0;

    if (nums.length === 1) {
        return nums[0];
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (sum === 0) {
            sum += nums[i];
        }

        if (nums[i] < nums[i + 1]) {
            sum += nums[i + 1];
        } else {
            if (max < sum) {
                max = sum;
            }

            sum = 0;
        }
    }

    if (max < sum) {
        max = sum;
    }

    return max;
};
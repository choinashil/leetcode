/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b);

    let max = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
            continue;
        }

        if (nums[i] === nums[i+ 1] - 1) {
            count++;
        } else {
            if (max < count + 1) {
                max = count + 1;
            }
            count = 0;
        }
    }

    return Math.max(max, count);
};

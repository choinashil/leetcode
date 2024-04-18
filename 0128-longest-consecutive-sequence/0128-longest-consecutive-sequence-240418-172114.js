/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);

    nums.sort((a, b) => a - b);

    let max = 0;
    let count = 0;

    for (const value of set) {
        if (set.has(value - 1)) {
            continue;
        }

        while (set.has(value + count)) {
            count++;
        }

        max = Math.max(max, count);
        count = 0;
    }

    return Math.max(max, count);
};
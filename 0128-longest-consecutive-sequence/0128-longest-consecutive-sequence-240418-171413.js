/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = {};
    nums.forEach(num => map[num] = true);

    nums.sort((a, b) => a - b);

    let max = 0;
    let count = 0;

    const mapList = Object.keys(map);

    for (let i = 0; i < mapList.length; i++) {
        if (map[Number(mapList[i]) - 1]) {
            continue;
        }

        while (map[Number(mapList[i]) + count]) {
            count++;
        }

        max = Math.max(max, count);
        count = 0;
    }

    return Math.max(max, count);
};
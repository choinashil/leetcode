/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const result1 = [...set1].filter(n => !set2.has(n));
    const result2 = [...set2].filter(n => !set1.has(n));

    return [result1, result2];
};
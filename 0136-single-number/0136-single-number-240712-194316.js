/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = {};

  nums.forEach(num => {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  });

  const [key] = Object.entries(map).find(([_, value]) => value === 1);
  return Number(key);
};
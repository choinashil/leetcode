/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = {};
  const answer = [];
  
  nums.forEach((num, index) => {
    if (hash.hasOwnProperty(target - num)) {
      answer.push(hash[target - num], index);
    } else {
      hash[num] = index;
    }
  });
  
  return answer;
};
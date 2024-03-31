/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const mappedNums = nums.map((num, index) => {
    return { value: num, index }
  });
  mappedNums.sort((a, b) => a.value - b.value);

  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const sum = mappedNums[i].value + mappedNums[j].value;

    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [mappedNums[i].index, mappedNums[j].index];
    }
  }
};
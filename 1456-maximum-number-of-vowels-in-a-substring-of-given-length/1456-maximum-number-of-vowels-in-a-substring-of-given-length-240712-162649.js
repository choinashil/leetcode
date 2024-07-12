/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const arr = s.split('').map(word => ['a', 'e', 'i', 'o', 'u'].includes(word) ? 1 : 0);

    let max = 0;
    let sum = 0;

    for (let i = 0; i < k; i++) {
      sum += arr[i];
    }

    if (max < sum) {
      max = sum;
    }

    for (let i = 0; i < arr.length - k; i++) {
      sum = sum - arr[i] + arr[i + k]; 

      if (max < sum) {
        max = sum;
      }
    }

    return max;
};
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {};

    arr.forEach(n => {
      if (map[n] === undefined) {
        map[n] = 1;
      } else {
        map[n]++;
      }
    });

    const keys = Object.keys(map);
    const values = Object.values(map);

    return keys.length === new Set(values).size;
};
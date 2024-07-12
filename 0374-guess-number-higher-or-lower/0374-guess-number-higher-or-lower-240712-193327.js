/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  function calculate(start, end) {
    const pick = Math.floor(start + (end - start) / 2);

    const result = guess(pick);
  
    if (result === 0) {
      return pick;
    } else if (result < 0) {
      return calculate(start, pick - 1);
    } else {
      return calculate(pick + 1, end);
    }
  }

  return calculate(1, n);
};
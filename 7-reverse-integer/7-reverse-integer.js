/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let original = '' + Math.abs(x);
  let result = '';
  const isPositive = x > 0;
  
  while (original.length) {
    const sliced = original % 10;
    result += sliced;
    original = original.slice(0, -1);
  }
  
  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return isPositive ? +result : -result;
};
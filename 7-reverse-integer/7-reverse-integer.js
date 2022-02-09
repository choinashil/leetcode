/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isPositive = x > 0;
  const reversed = +(Math.abs(x) + '').split('').reverse().join('');
  
  if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return isPositive ? reversed : -reversed;
};